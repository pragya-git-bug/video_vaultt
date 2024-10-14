import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Film } from 'lucide-react';

const videos = [
  { id: 1, title: 'Breathtaking Landscapes', thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 2, title: 'Gourmet Cooking Masterclass', thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 3, title: 'Exploring Paris', thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 4, title: 'Tech Gadgets Review 2024', thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 5, title: 'Home Workout Routines', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 6, title: 'Live Music Festival Highlights', thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 7, title: 'Extreme Sports Compilation', thumbnail: 'https://images.unsplash.com/photo-1601024445121-e5b82f020549?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 8, title: 'Mindfulness Meditation Guide', thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  { id: 9, title: 'Space Exploration Documentary', thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 opacity-75"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <Film className="h-24 w-24 mb-8 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 text-center">Welcome to VideoVault</h1>
          <p className="text-2xl mb-12 text-center max-w-3xl">Discover, upload, and stream amazing videos from creators worldwide. Your gateway to endless entertainment and knowledge.</p>
          <div className="flex space-x-6">
            <button className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
              Start Exploring
            </button>
            <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
              Upload Video
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Trending Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <Link key={video.id} to={`/video/${video.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">1.2M views • 2 days ago</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;