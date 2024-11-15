import { Music } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Music className="h-8 w-8 text-pink-500" />
          <Link href="/">
            <span className="text-2xl font-bold text-pink-500 hover:text-pink-800 cursor-pointer">
              FNF Sprunki
            </span>
          </Link>
        </div>
        {/* <nav className="flex space-x-6 text-sm">
          <Link href="/" className="hover:text-pink-500  hover:scale-125">
            HOMEPAGE
          </Link>
          <Link href="/blog" className="hover:text-pink-500 hover:scale-125">
            BLOG
          </Link>
          <Link href="/about" className="hover:text-pink-500  hover:scale-125">
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:text-pink-500  hover:scale-125"
          >
            CONTACT
          </Link>
          <Link
            href="/privacy"
            className="hover:text-pink-500  hover:scale-125"
          >
            PRIVACY
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
