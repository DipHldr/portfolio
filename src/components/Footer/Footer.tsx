import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © 2024 Deep Halder. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of</span>
            <span className="text-blue-400">React</span>
            <span>+</span>
            <span className="text-green-400">Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}