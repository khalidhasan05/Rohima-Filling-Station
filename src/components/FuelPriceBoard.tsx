import React from 'react';
import { Fuel, CheckCircle2, ShieldCheck, Zap, Gauge, Calculator } from 'lucide-react';
import { FUEL_ITEMS, FuelProduct } from '../data/stationData.ts';

interface FuelPriceBoardProps {
  onSelectForCalculator: (fuelId: string) => void;
}

export const FuelPriceBoard: React.FC<FuelPriceBoardProps> = ({ onSelectForCalculator }) => {
  return (
    <section id="fuel-prices" className="py-16 bg-neutral-950/80 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Live Dispenser Rates
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-brand">
              Daily Fuel Price Board
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Official rates per liter from <span className="text-white font-medium">Padma Oil Company Limited (POCL)</span> at Mollahat, Bagerhat. Supervised daily by Manager Abdul Malek.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 px-3 py-2 rounded-md border border-neutral-800 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Digital meter zero-calibration verified before every fill</span>
          </div>
        </div>

        {/* Totem Board Grid of Fuels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FUEL_ITEMS.map((fuel) => {
            const isOctane = fuel.id === 'octane';
            const isDiesel = fuel.id === 'diesel';

            return (
              <div
                key={fuel.id}
                className="group relative bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Fuel Name & Grade Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                          {fuel.octaneOrCetane}
                        </span>
                        <span className="text-xs text-neutral-500">·</span>
                        <span className="text-xs font-medium text-amber-400">
                          {fuel.bengaliName}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white font-brand mt-0.5">
                        {fuel.name}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                      <Fuel className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Digital LED Display Simulation */}
                  <div className="bg-black/90 rounded-lg p-4 border border-neutral-800 mb-5 text-center">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                      Price Per Liter
                    </div>
                    <div className="text-4xl font-extrabold text-amber-400 font-digital tracking-tight tabular-nums">
                      ৳ {fuel.pricePerLiter.toFixed(2)}
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-1 font-mono">
                      BDT / Liter
                    </div>
                  </div>

                  {/* Fuel Specifications */}
                  <div className="space-y-2.5 text-xs text-neutral-300 mb-6">
                    <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                      <span className="text-neutral-500">Refinery Source</span>
                      <span className="font-semibold text-sky-400">Padma Oil Corp</span>
                    </div>

                    <div className="py-1 border-b border-neutral-800/60">
                      <span className="text-neutral-500 block mb-0.5">Active Dispenser Nozzles</span>
                      <span className="font-semibold text-amber-400">
                        {fuel.nozzleSchedule}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                      <span className="text-neutral-500">Density Range</span>
                      <span className="font-mono text-neutral-300 tabular-nums">{fuel.density}</span>
                    </div>

                    <div className="pt-1">
                      <span className="text-neutral-500 block mb-1">Recommended Usage:</span>
                      <p className="text-neutral-300 text-xs leading-relaxed">
                        {fuel.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Calculate Cost CTA */}
                <button
                  onClick={() => onSelectForCalculator(fuel.id)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>Calculate Cost for {fuel.name.split(' ')[0]}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Purity & Transparency Guarantee Banner */}
        <div className="mt-8 p-4 sm:p-5 bg-neutral-900/60 border border-neutral-800/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">
                5-Liter Measure & Hydrometer Verification Available
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Any driver or vehicle owner can request a standard 5-liter volumetric canister test or density hydrometer check with our Cashiers or Nozzlemen at any time.
              </p>
            </div>
          </div>

          <a
            href="#calculator"
            className="text-xs font-medium text-amber-400 hover:text-amber-300 whitespace-nowrap self-start sm:self-auto"
          >
            Open Volume Calculator →
          </a>
        </div>
      </div>
    </section>
  );
};
