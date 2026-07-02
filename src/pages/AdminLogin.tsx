import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-terra-brown flex items-center justify-center p-4">
      <Link to="/" className="absolute top-8 left-8 text-terra-cream hover:text-terra-green flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" /> Back to Website
      </Link>
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <img src="https://i.ibb.co/fzs8ZVD2/Whats-App-Image-2026-04-26-at-9-23-04-AM-2.jpg" alt="TerraNova Energy Ltd Logo" className="h-20 w-auto object-contain bg-white p-1 rounded-sm mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-bold text-terra-brown">Admin Portal</h2>
          <p className="text-terra-brown/60 text-sm mt-1">Authorized personnel only.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-terra-brown mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-terra-cream rounded-lg px-4 py-3 focus:outline-none focus:border-terra-green bg-terra-cream/50"
              placeholder="••••••••"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-terra-green hover:bg-terra-green-light text-white font-bold py-3 rounded-lg transition-colors"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
