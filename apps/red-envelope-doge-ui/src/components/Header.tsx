'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', emoji: '🏮', href: '/' },
    { id: 'doge', label: 'Doge', emoji: '🐶', href: '/doge' },
    { id: 'redenvelope', label: 'Red Envelope', emoji: '🧧', href: '/redenvelope' },
    { id: 'friend', label: 'Friend', emoji: '✨', href: '/friend' },
  ];

  return (
    <header className="bg-envelope-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">🏮</span>
              <span className="hidden sm:inline">Lunar Year</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-1 sm:space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  px-3 py-2 rounded-lg text-sm sm:text-base font-medium
                  transition-all duration-300 ease-in-out
                  flex items-center gap-2
                  ${activeItem === item.id
                    ? 'bg-gradient-to-r from-ingot-500 to-ingot-400 text-envelope-700 shadow-md transform scale-105'
                    : 'text-white hover:bg-white/10'
                  }
                `}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="text-lg sm:text-xl">{item.emoji}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right decoration */}
          <div className="flex-shrink-0 text-2xl">
            ✨
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
