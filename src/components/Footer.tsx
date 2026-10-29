import React from 'react';
import { Fuel, Phone, MapPin, Heart } from 'lucide-react';
import { STATION_INFO } from '../data/stationData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 text-lg font-bold text-white mb-2 font-brand">
              <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-neutral-950">
                <Fuel className="w-4 h-4" />
              </div>
              <span>{STATION_INFO.name}</span>
            </div>
            <div className="text-xs font-semibold text-sky-400 mb-2">
              Authorized Padma Oil Company Limited Dealer · Mollahat, Bagerhat
            </div>
            <p className="text-xs text-neutral-400 max-w-sm mb-4 leading-relaxed">
              Official forecourt service dispensing refinery-pure Diesel, Petrol, and Octane alongside genuine Mobil, Yamalube, Havoline, and Total lubricants with 24/7 highway assistance.
            </p>
            <div className="text-xs text-neutral-400 space-y-1">
              <div>MD: <span className="text-white font-medium">MD Nazrul Islam Milton</span> (<a href="tel:01715620844" className="text-amber-400 hover:underline">01715620844</a>)</div>
              <div>Manager: <span className="text-white font-medium">Abdul Malek</span> (<a href="tel:01713500659" className="text-sky-400 hover:underline">01713500659</a>)</div>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Station Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#fuel-prices" className="hover:text-amber-400 transition-colors">
                  Daily Fuel Rates
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Lubricants & Engine Oils
                </a>
              </li>
              <li>
                <a href="#employees" className="hover:text-amber-400 transition-colors">
                  Our 14 Station Employees
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Fuel Cost Calculator
                </a>
              </li>
              <li>
                <a href="#location-hours" className="hover:text-amber-400 transition-colors">
                  Location & 24/7 Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Forecourt Contact
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Mollahat, Bagerhat, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${STATION_INFO.phonePrimary}`} className="hover:text-white">
                  Manager: {STATION_INFO.phonePrimary}
                </a>
              </div>
              <div className="text-neutral-400 pt-1 space-y-0.5">
                <div>Khalid Hasan: <a href="tel:01706454929" className="text-white hover:underline">01706454929</a></div>
                <div>Milon Fokir: <a href="tel:01727289571" className="text-white hover:underline">01727289571</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3">
          <div>
            © {new Date().getFullYear()} {STATION_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Bangladesh Petroleum Forecourt Standards</span>
            <span>·</span>
            <span>Reg: {STATION_INFO.licenseNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
