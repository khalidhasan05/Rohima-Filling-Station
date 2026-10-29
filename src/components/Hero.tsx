import React from 'react';
import { Fuel, Phone, MapPin, ShieldCheck, Clock, ArrowRight, Gauge, Droplets } from 'lucide-react';
import { STATION_INFO } from '../data/stationData.ts';

interface HeroProps {
  onCallClick: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCallClick, onExploreProducts }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden z-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Quiet Unboxed Metadata (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-amber-300 mb-4 tracking-wide [text-shadow:_0_1px_6px_rgb(0_0_0_/_90%)]">
            <span className="text-white font-bold">{STATION_INFO.bengaliName}</span>
            <span aria-hidden="true" className="text-white/80">·</span>
            <span className="text-white">Mollahat, Bagerhat</span>
            <span aria-hidden="true" className="text-white/80">·</span>
            <span className="text-sky-300 font-bold">Padma Oil Company Dealer</span>
            <span aria-hidden="true" className="text-white/80">·</span>
            <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
              <Clock className="w-3.5 h-3.5 drop-shadow" />
              <span>Open 24/7</span>
            </span>
          </div>

          {/* Main Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-brand leading-[1.08] text-balance [text-shadow:_0_2px_12px_rgb(0_0_0_/_90%)]">
            Rohima Filling Station
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-300 font-display mt-2 tracking-normal [text-shadow:_0_2px_10px_rgb(0_0_0_/_90%)]">
              Padma Oil Dealer · Mollahat, Bagerhat
            </span>
          </h1>

          {/* Value proposition paragraph */}
          <p className="text-base sm:text-lg text-white font-medium mb-8 max-w-2xl leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_95%)]">
            Authorized dealer of <strong className="text-amber-300">Padma Oil Company Limited</strong> in Mollahat, Bagerhat. Under the leadership of MD Nazrul Islam Milton and Manager Abdul Malek, we dispense genuine Diesel, Petrol, and Octane with 6 active daytime diesel nozzles, 4 night nozzles, and 24/7 petrol & octane service alongside genuine Mobil, Yamalube, Havoline, and Total lubricants.
          </p>

          {/* Functional Call To Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#fuel-prices"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors shadow-xl whitespace-nowrap"
            >
              <Fuel className="w-4 h-4" />
              <span>View Today's Fuel Rates</span>
            </a>

            <button
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-950/85 hover:bg-neutral-900 border border-white/25 rounded-md transition-colors whitespace-nowrap shadow-xl"
            >
              <Droplets className="w-4 h-4 text-amber-400" />
              <span>Lubricants & Engine Oils</span>
              <ArrowRight className="w-4 h-4 ml-1 text-neutral-300" />
            </button>

            <a
              href="#location-hours"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-white hover:text-amber-300 transition-colors whitespace-nowrap [text-shadow:_0_2px_8px_rgb(0_0_0_/_95%)]"
            >
              <MapPin className="w-4 h-4 text-emerald-400 drop-shadow" />
              <span>Mollahat Location & Hours</span>
            </a>
          </div>

          {/* Adjacency Trust Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/30 [text-shadow:_0_2px_8px_rgb(0_0_0_/_95%)]">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-digital tabular-nums">
                100%
              </div>
              <div className="text-xs text-white font-semibold mt-1">
                Padma Oil Pure Refinery
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-digital tabular-nums">
                24 / 7
              </div>
              <div className="text-xs text-white font-semibold mt-1">
                Round-the-Clock Service
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-300 font-digital tabular-nums">
                6 / 4 Nozzles
              </div>
              <div className="text-xs text-white font-semibold mt-1">
                Diesel (Day 6 / Night 4)
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-digital tabular-nums">
                14 Staff
              </div>
              <div className="text-xs text-white font-semibold mt-1">
                Dedicated Station Crew
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
