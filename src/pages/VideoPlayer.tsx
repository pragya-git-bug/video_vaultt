import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, MessageCircle, Share2, Settings } from 'lucide-react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [quality, setQuality] = useState('auto');

  // Mock video data (replace with actual data fetching logic)
  const video = {
    id,
    title: 'Amazing Nature Documentary',
    views: '1.2M',
    likes: '50K',
    description: 'Explore the wonders of nature in this breathtaking documentary.',
    uploadDate: '2 days ago',
    url: 'https://www.youtube.com/watch?v=LXb3EKWsInQ', // Example nature video
  };

  const recommendedVideos = [
    { id: 2, title: 'Cooking Masterclass', thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 3, title: 'Travel Vlog: Paris', thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 4, title: 'Tech Review: Latest Gadgets', thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
    { id: 5, title: 'Fitness Workout Routine', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
  ];

  const playbackRates = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const qualities = ['auto', '720p', '480p', '360p'];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 lg:pr-8">
          <div className="aspect-w-16 aspect-h-9 mb-4 relative">
            <ReactPlayer
              url={video.url}
              width="100%"
              height="100%"
              controls
              playbackRate={playbackRate}
              config={{
                youtube: {
                  playerVars: { modestbranding: 1 }
                }
              }}
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="relative">
                <button
                  className="bg-black bg-opacity-50 text-white px-3 py-1 rounded flex items-center"
                  onClick={() => document.getElementById('speed-dropdown')?.classList.toggle('hidden')}
                >
                  <Settings className="h-4 w-4 mr-1" />
                  {playbackRate}x
                </button>
                <div id="speed-dropdown" className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg hidden">
                  {playbackRates.map((rate) => (
                    <button
                      key={rate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setPlaybackRate(rate)}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <button
                  className="bg-black bg-opacity-50 text-white px-3 py-1 rounded flex items-center"
                  onClick={() => document.getElementById('quality-dropdown')?.classList.toggle('hidden')}
                >
                  <Settings className="h-4 w-4 mr-1" />
                  {quality}
                </button>
                <div id="quality-dropdown" className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg hidden">
                  {qualities.map((q) => (
                    <button
                      key={q}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setQuality(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600">{video.views} views • {video.uploadDate}</p>
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <ThumbsUp className="h-5 w-5 mr-1" />
                {video.likes}
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-5 w-5 mr-1" />
                Comment
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <Share2 className="h-5 w-5 mr-1" />
                Share
              </button>
            </div>
          </div>
          <p className="text-gray-700 mb-8">{video.description}</p>
        </div>
        <div className="lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Recommended Videos</h2>
          <div className="space-y-4">
            {recommendedVideos.map((video) => (
              <div key={video.id} className="flex space-x-2 bg-white p-2 rounded-lg shadow hover:shadow-md transition duration-300">
                <img src={video.thumbnail} alt={video.title} className="w-40 h-24 object-cover rounded" />
                <div>
                  <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600">1.2M views • 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;