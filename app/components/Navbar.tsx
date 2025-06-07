import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="https://babynama.com/_next/static/media/logo-light.f8d530c6.svg"
              alt="Babynama Logo"
              width={100}
              height={10}
              priority
              className="mx-auto"
            />
            <p className="text-sm text-gray-600 mt-1">Expert care for your little one</p>
          </div>
          <nav className="hidden md:flex space-x-8">
            {/* Home Link */}
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            
            {/* Webinars Link */}
            <Link
              href="/webinars"
              className="text-indigo-600 font-medium"
            >
              Webinars
            </Link>
            
            {/* Resources Link */}
            <Link
              href="/resources"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;