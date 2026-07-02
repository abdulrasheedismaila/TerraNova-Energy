import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';

const DB_FILE = path.join(process.cwd(), 'data.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ images: [], videos: [] }));
}

function getDb() {
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
}

function saveDb(data: any) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
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
  app.get('/api/media', (req, res) => {
    const db = getDb();
    res.json(db);
  });

  // Upload/Add Image
  app.post('/api/images', checkAuth, (req, res) => {
    const { imageUrl, title } = req.body; // Can be base64 or URL
    const db = getDb();
    const newImage = { id: Date.now().toString(), url: imageUrl, title: title || '' };
    db.images.unshift(newImage);
    saveDb(db);
    res.json({ success: true, image: newImage });
  });

  // Delete Image
  app.delete('/api/images/:id', checkAuth, (req, res) => {
    const db = getDb();
    db.images = db.images.filter((img: any) => img.id !== req.params.id);
    saveDb(db);
    res.json({ success: true });
  });

  // Add Video
  app.post('/api/videos', checkAuth, (req, res) => {
    const { videoUrl, title } = req.body;
    const db = getDb();
    let embedUrl = videoUrl;
    
    // Convert YouTube URL to embed
    if (videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = new URL(videoUrl).searchParams.get('v');
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('drive.google.com/file/d/')) {
      embedUrl = videoUrl.replace('/view', '/preview');
    }

    const newVideo = { id: Date.now().toString(), url: embedUrl, originalUrl: videoUrl, title: title || '' };
    db.videos.unshift(newVideo);
    saveDb(db);
    res.json({ success: true, video: newVideo });
  });

  // Delete Video
  app.delete('/api/videos/:id', checkAuth, (req, res) => {
    const db = getDb();
    db.videos = db.videos.filter((vid: any) => vid.id !== req.params.id);
    saveDb(db);
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
