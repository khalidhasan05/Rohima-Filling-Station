import React, { useState } from 'react';
import { Phone, Menu, X, Fuel } from 'lucide-react';
import { STATION_INFO } from '../data/stationData.ts';

interface NavbarProps {
  onQuickCallClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuickCallClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single clean text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 font-brand"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-neutral-950 shadow-md">
              <Fuel className="w-5 h-5" />
            </div>
            <span>{STATION_INFO.name}</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a
              href="#fuel-prices"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Fuel Rates
            </a>
            <a
              href="#products"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Products & Oils
            </a>
            <a
              href="#employees"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Our Team
            </a>
            <a
              href="#calculator"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Calculator
            </a>
            <a
              href="#location-hours"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              Location & Hours
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onQuickCallClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Forecourt</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-800 space-y-2">
            <a
              href="#fuel-prices"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
            >
              Fuel Rates
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
            >
              Products & Lubricants
            </a>
            <a
              href="#employees"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
            >
              Our Team
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
            >
              Fuel Calculator
            </a>
            <a
              href="#location-hours"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md"
            >
              Location & Hours
            </a>
            <div className="pt-2 border-t border-neutral-800/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuickCallClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-500 rounded-md shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Forecourt ({STATION_INFO.phonePrimary})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
