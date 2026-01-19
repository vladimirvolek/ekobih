"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/products";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-green-700">EkoBiH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Početna
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1">
                Kategorije
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/kategorija/${category.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    <span>{category.icon}</span>
                    <span className="text-gray-700">{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/o-nama"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              O Nama
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pretraži proizvode..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100 w-64"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg"
              >
                Početna
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/kategorija/${category.slug}`}
                  className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg flex items-center gap-2"
                >
                  <span>{category.icon}</span>
                  {category.name}
                </Link>
              ))}
              <Link
                href="/o-nama"
                className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg"
              >
                O Nama
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg"
              >
                Blog
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
