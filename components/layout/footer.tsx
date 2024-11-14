import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6">
      <div className="mt-8 text-center text-sm">
        <p>
          &copy; 2024{" "}
          <Link href="#" className="hover:text-pink-500">
            FNF Sprunki
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
