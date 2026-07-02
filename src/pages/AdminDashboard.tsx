import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Image as ImageIcon, Video, Trash2, Plus, Upload } from 'lucide-react';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [loading, setLoading] = useState(true);
  
  // States for new items
  const [imgUrl, setImgUrl] = useState('');
  const [imgTitle, setImgTitle] = useState('');
  const [vidUrl, setVidUrl] = useState('');
  const [vidTitle, setVidTitle] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchMedia();
  }, [navigate]);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/media');
      const data = await res.json();
      setMedia(data);
    } catch(err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const getAuthHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imgUrl) return;
    try {
       await fetch('/api/images', {
         method: 'POST',
         headers: getAuthHeaders(),
         body: JSON.stringify({ imageUrl: imgUrl, title: imgTitle })
       });
       setImgUrl('');
       setImgTitle('');
       if(fileInputRef.current) fileInputRef.current.value = '';
       fetchMedia();
    } catch(err) {
      console.error(err);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if(!confirm('Are you sure?')) return;
    try {
       await fetch(`/api/images/${id}`, { method: 'DELETE', headers: getAuthHeaders() });
       fetchMedia();
    } catch(err) { console.error(err); }
  };

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vidUrl) return;
    try {
       await fetch('/api/videos', {
         method: 'POST',
         headers: getAuthHeaders(),
         body: JSON.stringify({ videoUrl: vidUrl, title: vidTitle })
       });
       setVidUrl('');
       setVidTitle('');
       fetchMedia();
    } catch(err) { console.error(err); }
  };

  const handleDeleteVideo = async (id: string) => {
    if(!confirm('Are you sure?')) return;
    try {
       await fetch(`/api/videos/${id}`, { method: 'DELETE', headers: getAuthHeaders() });
       fetchMedia();
    } catch(err) { console.error(err); }
  };

  if(loading) return <div className="min-h-screen bg-terra-cream flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-terra-brown text-white md:min-h-screen flex flex-col pt-6 md:pt-8 shrink-0">
        <div className="px-6 mb-6 md:mb-12 flex items-center justify-between md:block">
           <div className="flex items-center gap-3">
             <img src="https://i.ibb.co/fzs8ZVD2/Whats-App-Image-2026-04-26-at-9-23-04-AM-2.jpg" alt="TerraNova Energy Ltd Logo" className="h-8 md:h-10 w-auto object-contain bg-white p-1 rounded-sm" />
             <h2 className="text-lg md:text-xl font-serif font-bold text-terra-yellow leading-tight">TerraNova<br className="hidden md:block"/>CMS</h2>
           </div>
           <button onClick={handleLogout} className="md:hidden flex items-center gap-2 px-3 py-1.5 bg-red-500/20 text-red-100 hover:bg-red-500/40 rounded-lg transition-colors text-sm">
            <LogOut className="w-4 h-4" /> Logout
           </button>
        </div>
        <p className="hidden md:block text-terra-cream/60 text-sm mt-3 border-t border-white/10 pt-3 px-6 mb-4">Dashboard Home</p>
        
        <nav className="flex md:flex-col px-4 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('images')}
            className={`whitespace-nowrap flex-1 md:w-full flex items-center justify-center md:justify-start gap-2 md:gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'images' ? 'bg-terra-green' : 'hover:bg-white/10 bg-white/5 md:bg-transparent'}`}
          >
            <ImageIcon className="w-5 h-5" /> <span className="text-sm md:text-base">Manage Images</span>
          </button>
          <button 
            onClick={() => setActiveTab('videos')}
            className={`whitespace-nowrap flex-1 md:w-full flex items-center justify-center md:justify-start gap-2 md:gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'videos' ? 'bg-terra-green' : 'hover:bg-white/10 bg-white/5 md:bg-transparent'}`}
          >
            <Video className="w-5 h-5" /> <span className="text-sm md:text-base">Manage Videos</span>
          </button>
        </nav>
        
        <div className="p-4 mt-auto hidden md:block">
          <button onClick={handleLogout} className="w-full flex items-center gap-2 justify-center px-4 py-3 bg-red-500/20 text-red-100 hover:bg-red-500/40 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-terra-cream overflow-y-auto">
         <div className="max-w-5xl mx-auto">
            
            {activeTab === 'images' && (
              <div>
                <h1 className="text-3xl font-serif font-bold text-terra-brown mb-8 flex items-center gap-3">
                   <ImageIcon className="w-8 h-8 text-terra-green" /> Upload & Manage Images
                </h1>
                
                {/* Upload Form */}
                <form onSubmit={handleAddImage} className="bg-white p-6 rounded-2xl shadow-sm border border-terra-brown/5 mb-12">
                   <div className="grid md:grid-cols-2 gap-6 items-end">
                      <div>
                         <label className="block text-sm font-medium text-terra-brown mb-2">Select Image from Device</label>
                         <div className="flex bg-terra-cream border border-terra-brown/20 rounded-lg overflow-hidden">
                           <label className="flex-1 flex items-center justify-center py-3 cursor-pointer hover:bg-terra-brown/5 transition-colors">
                             <Upload className="w-5 h-5 mr-2 text-terra-green" />
                             <span className="text-terra-brown text-sm font-bold uppercase tracking-wide">IMAGE UPLOAD BUTTON</span>
                             <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                           </label>
                         </div>
                         {imgUrl && <p className="text-xs text-terra-green mt-2 font-medium">Image selected ready to upload.</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-terra-brown mb-2">Image Title / Description (Optional)</label>
                        <input 
                           type="text" value={imgTitle} onChange={e => setImgTitle(e.target.value)}
                           className="w-full border border-terra-brown/20 rounded-lg px-4 py-3 focus:outline-none focus:border-terra-green" 
                           placeholder="e.g. Mangrove planting day"
                        />
                      </div>
                   </div>
                   <div className="mt-6">
                      <button type="submit" disabled={!imgUrl} className="bg-terra-brown hover:bg-terra-brown-light disabled:opacity-50 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                        <Plus className="w-5 h-5" /> Add to Gallery
                      </button>
                   </div>
                </form>

                {/* Gallery List */}
                <h3 className="text-xl font-bold text-terra-brown mb-6 mt-12">Current Gallery Images</h3>
                {media.images.length === 0 ? (
                  <p className="text-terra-brown/60">No images uploaded yet. Added images will appear here and on the Projects page.</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {media.images.map((img: any) => (
                      <div key={img.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-terra-brown/5 group">
                        <img src={img.url} alt={img.title} className="w-full aspect-square object-cover" />
                        <div className="p-4 flex justify-between items-center bg-white">
                          <p className="text-sm font-medium text-terra-brown truncate pr-2">{img.title || 'Untitled'}</p>
                          <button onClick={() => handleDeleteImage(img.id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors group-hover:opacity-100 opacity-60">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'videos' && (
              <div>
                <h1 className="text-3xl font-serif font-bold text-terra-brown mb-8 flex items-center gap-3">
                   <Video className="w-8 h-8 text-terra-green" /> Add & Manage Videos
                </h1>
                
                {/* Upload Form */}
                <form onSubmit={handleAddVideo} className="bg-white p-6 rounded-2xl shadow-sm border border-terra-brown/5 mb-12">
                   <div className="grid md:grid-cols-2 gap-6 items-end">
                      <div>
                         <label className="block text-sm font-medium text-terra-brown mb-2">Video Link (YouTube / Drive)</label>
                         <input 
                           type="url" value={vidUrl} onChange={e => setVidUrl(e.target.value)} required
                           className="w-full border border-terra-brown/20 rounded-lg px-4 py-3 focus:outline-none focus:border-terra-green" 
                           placeholder="https://youtube.com/watch?v=..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-terra-brown mb-2">Video Title</label>
                        <input 
                           type="text" value={vidTitle} onChange={e => setVidTitle(e.target.value)} required
                           className="w-full border border-terra-brown/20 rounded-lg px-4 py-3 focus:outline-none focus:border-terra-green" 
                           placeholder="e.g. CEO Keynote 2026"
                        />
                      </div>
                   </div>
                   <div className="mt-6">
                      <button type="submit" className="bg-terra-brown hover:bg-terra-brown-light text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                        <Plus className="w-5 h-5" /> Add Video
                      </button>
                   </div>
                </form>

                {/* Video List */}
                <h3 className="text-xl font-bold text-terra-brown mb-6 mt-12">Live Videos</h3>
                {media.videos.length === 0 ? (
                  <p className="text-terra-brown/60">No videos added yet.</p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {media.videos.map((vid: any) => (
                      <div key={vid.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-terra-brown/5">
                        <div className="aspect-video w-full bg-terra-brown/5">
                           <iframe src={vid.url} className="w-full h-full" allowFullScreen></iframe>
                        </div>
                        <div className="p-4 flex justify-between items-center bg-white">
                          <p className="text-sm font-medium text-terra-brown truncate pr-2">{vid.title}</p>
                          <button onClick={() => handleDeleteVideo(vid.id)} className="text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

         </div>
      </div>
    </div>
  );
}
