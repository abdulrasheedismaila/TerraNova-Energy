import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const DB_FILE = path.join(process.cwd(), 'data.json');

// Initialize DB if not exists (Fallback local storage)
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ images: [], videos: [] }));
}

function getLocalDb() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveLocalDb(data: any) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

let supabaseClient: SupabaseClient | null = null;

function getSupabase() {
  if (!supabaseClient) {
    let url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (url && key) {
      // Fix common user copy-paste errors with Supabase URLs
      url = url.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
      supabaseClient = createClient(url, key);
    }
  }
  return supabaseClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // API Routes
  app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === 'nova@peak') {
      res.json({ success: true, token: 'admin-token-123' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid password' });
    }
  });

  // Middleware to check token
  const checkAuth = (req: any, res: any, next: any) => {
    const token = req.headers.authorization;
    if (token === 'Bearer admin-token-123') {
      next();
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  };

  // Get Media
  app.get('/api/media', async (req, res) => {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const [imagesRes, videosRes] = await Promise.all([
          supabase.from('images').select('*').order('created_at', { ascending: false }),
          supabase.from('videos').select('*').order('created_at', { ascending: false })
        ]);
        
        // Handle case where tables might not exist yet
        if (imagesRes.error || videosRes.error) {
           console.error("Supabase Error:", imagesRes.error || videosRes.error);
           return res.json(getLocalDb()); // Fallback to local if tables missing
        }
        
        res.json({ 
          images: imagesRes.data || [], 
          videos: videosRes.data || [] 
        });
      } catch (err) {
        console.error(err);
        res.json(getLocalDb());
      }
    } else {
      // Fallback
      res.json(getLocalDb());
    }
  });

  // Upload/Add Image
  app.post('/api/images', checkAuth, async (req, res) => {
    const { imageUrl, title } = req.body;
    const newImage = { id: Date.now().toString(), url: imageUrl, title: title || '' };
    
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('images').insert([newImage]);
      if (error) return res.status(500).json({ success: false, message: error.message });
    } else {
      const db = getLocalDb();
      db.images.unshift(newImage);
      saveLocalDb(db);
    }
    
    res.json({ success: true, image: newImage });
  });

  // Delete Image
  app.delete('/api/images/:id', checkAuth, async (req, res) => {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('images').delete().eq('id', req.params.id);
      if (error) return res.status(500).json({ success: false, message: error.message });
    } else {
      const db = getLocalDb();
      db.images = db.images.filter((img: any) => img.id !== req.params.id);
      saveLocalDb(db);
    }
    res.json({ success: true });
  });

  // Add Video
  app.post('/api/videos', checkAuth, async (req, res) => {
    const { videoUrl, title } = req.body;
    let embedUrl = videoUrl;
    
    if (videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = new URL(videoUrl).searchParams.get('v');
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('drive.google.com/file/d/')) {
      embedUrl = videoUrl.replace('/view', '/preview');
    }

    const newVideo = { id: Date.now().toString(), url: embedUrl, original_url: videoUrl, title: title || '' };
    
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('videos').insert([newVideo]);
      if (error) return res.status(500).json({ success: false, message: error.message });
    } else {
      const db = getLocalDb();
      db.videos.unshift({ ...newVideo, originalUrl: videoUrl });
      saveLocalDb(db);
    }
    
    res.json({ success: true, video: newVideo });
  });

  // Delete Video
  app.delete('/api/videos/:id', checkAuth, async (req, res) => {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from('videos').delete().eq('id', req.params.id);
      if (error) return res.status(500).json({ success: false, message: error.message });
    } else {
      const db = getLocalDb();
      db.videos = db.videos.filter((vid: any) => vid.id !== req.params.id);
      saveLocalDb(db);
    }
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
