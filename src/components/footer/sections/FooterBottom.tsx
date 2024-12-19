import React from 'react';

export default function FooterBottom() {
  return (
    <div className="py-6 border-t border-purple-500/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div>
          © {new Date().getFullYear()} RizzMods. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
}