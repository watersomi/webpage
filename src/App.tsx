import React from 'react';
import { Github, Twitter, Disc as Discord, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(120,129,174)] to-[rgb(90,99,144)] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/20"
          />
          <h1 className="text-2xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-white/80">Developer & Community Builder</p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          <a
            href="https://github.com"
            className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-medium">GitHub</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
          </a>

          <a
            href="https://twitter.com"
            className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 group"
          >
            <Twitter className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-medium">Twitter</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
          </a>

          <a
            href="https://discord.com"
            className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 group"
          >
            <Discord className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-medium">Join our Discord</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
          </a>

          <a
            href="https://website.com"
            className="flex items-center p-4 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 group"
          >
            <Globe className="w-6 h-6 text-white mr-3" />
            <span className="text-white font-medium">Portfolio Website</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white">→</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-white/60 text-sm">
          © 2024 • Built with ❤️
        </footer>
      </div>
    </div>
  );
}

export default App;