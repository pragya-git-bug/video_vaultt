import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, User, LogIn, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Video className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                VideoVault
              </span>
            </Link>
          </div>
          <div className="flex-1 max-w-xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogIn className="h-5 w-5 inline-block mr-1" />
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              <User className="h-5 w-5 inline-block mr-1" />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;