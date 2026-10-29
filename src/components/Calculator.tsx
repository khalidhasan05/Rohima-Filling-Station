import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Fuel, Droplets, Receipt, Check, Copy, RefreshCw } from 'lucide-react';
import { FUEL_ITEMS, LUBRICANT_PRODUCTS, LubricantProduct, FuelProduct } from '../data/stationData.ts';

interface CalculatorProps {
  initialFuelId?: string;
  selectedOilFromCatalog?: LubricantProduct | null;
}

export const Calculator: React.FC<CalculatorProps> = ({
  initialFuelId = 'diesel',
  selectedOilFromCatalog
}) => {
  const [selectedFuelId, setSelectedFuelId] = useState<string>(initialFuelId);
  const [calcMode, setCalcMode] = useState<'budget' | 'liters'>('budget');
  const [budgetTaka, setBudgetTaka] = useState<number>(1000);
  const [targetLiters, setTargetLiters] = useState<number>(20);
  const [selectedOilId, setSelectedOilId] = useState<string>('none');
  const [oilQuantity, setOilQuantity] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialFuelId) {
      setSelectedFuelId(initialFuelId);
    }
  }, [initialFuelId]);

  useEffect(() => {
    if (selectedOilFromCatalog) {
      setSelectedOilId(selectedOilFromCatalog.id);
      setOilQuantity(1);
    }
  }, [selectedOilFromCatalog]);

  const currentFuel = FUEL_ITEMS.find((f) => f.id === selectedFuelId) || FUEL_ITEMS[0];
  const currentOil = LUBRICANT_PRODUCTS.find((p) => p.id === selectedOilId);

  // Computations
  let fuelCost = 0;
  let fuelLiters = 0;

  if (calcMode === 'budget') {
    fuelCost = Math.max(0, budgetTaka);
    fuelLiters = fuelCost > 0 ? Number((fuelCost / currentFuel.pricePerLiter).toFixed(2)) : 0;
  } else {
    fuelLiters = Math.max(0, targetLiters);
    fuelCost = Number((fuelLiters * currentFuel.pricePerLiter).toFixed(2));
  }

  const oilCost = currentOil ? currentOil.price * oilQuantity : 0;
  const grandTotal = Number((fuelCost + oilCost).toFixed(2));

  const handleCopyReceipt = () => {
    const text = `=== ROHIMA FILLING STATION RECEIPT ESTIMATE ===
Location: Mollahat, Bagerhat (Padma Oil Dealer)
Fuel: ${currentFuel.name} @ ৳ ${currentFuel.pricePerLiter.toFixed(2)}/L
Quantity: ${fuelLiters} Liters
Fuel Cost: ৳ ${fuelCost.toFixed(2)}
${currentOil ? `Lubricant: ${currentOil.name} x ${oilQuantity} = ৳ ${oilCost}\n` : ''}GRAND TOTAL: ৳ ${grandTotal.toFixed(2)} Taka
Manager: Abdul Malek (01713500659)
Cash Desk: Khalid (01706454929) / Milon (01727289571)
Padma Oil Refinery Quality. Thank you!`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const presetBudgets = [500, 1000, 2000, 3000, 5000];
  const presetLiters = [5, 10, 20, 40, 60];

  return (
    <section id="calculator" className="py-16 bg-neutral-900/60 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Forecourt Tool
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-brand">
            Interactive Fuel & Lubricant Cost Calculator
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
            Quickly estimate your volumetric fuel output and total station bill before driving up to the dispenser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-xl p-6 shadow-xl">
            {/* Step 1: Fuel Selection */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                1. Select Fuel Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {FUEL_ITEMS.map((fuel) => (
                  <button
                    key={fuel.id}
                    onClick={() => setSelectedFuelId(fuel.id)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      selectedFuelId === fuel.id
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{fuel.name.split(' ')[0]}</div>
                    <div className="text-[11px] font-mono text-amber-400 mt-1">
                      ৳ {fuel.pricePerLiter.toFixed(2)}/L
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Calculation Mode Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  2. Calculation Mode
                </label>
                <div className="flex p-0.5 bg-neutral-900 rounded-lg border border-neutral-800">
                  <button
                    onClick={() => setCalcMode('budget')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      calcMode === 'budget'
                        ? 'bg-amber-500 text-neutral-950 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    By Budget (Taka ৳)
                  </button>
                  <button
                    onClick={() => setCalcMode('liters')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                      calcMode === 'liters'
                        ? 'bg-amber-500 text-neutral-950 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    By Desired Liters
                  </button>
                </div>
              </div>

              {/* Input for budget or liters */}
              {calcMode === 'budget' ? (
                <div>
                  <div className="relative mb-3">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-sm">
                      ৳
                    </span>
                    <input
                      type="number"
                      min="10"
                      step="50"
                      value={budgetTaka || ''}
                      onChange={(e) => setBudgetTaka(Number(e.target.value))}
                      className="w-full pl-9 pr-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-lg focus:outline-none focus:border-amber-500 tabular-nums"
                      placeholder="Enter amount in Taka"
                    />
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-neutral-500">Quick amounts:</span>
                    {presetBudgets.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setBudgetTaka(amt)}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded text-neutral-300"
                      >
                        ৳ {amt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="relative mb-3">
                    <input
                      type="number"
                      min="0.5"
                      step="1"
                      value={targetLiters || ''}
                      onChange={(e) => setTargetLiters(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-lg focus:outline-none focus:border-amber-500 tabular-nums"
                      placeholder="Enter liters"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-xs">
                      Liters
                    </span>
                  </div>

                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-neutral-500">Quick Liters:</span>
                    {presetLiters.map((ltr) => (
                      <button
                        key={ltr}
                        onClick={() => setTargetLiters(ltr)}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded text-neutral-300"
                      >
                        {ltr} L
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Optional Lubricant Add-On */}
            <div className="pt-4 border-t border-neutral-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                3. Optional Lubricant / Oil Add-on
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select
                  value={selectedOilId}
                  onChange={(e) => setSelectedOilId(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="none">-- No lubricant needed --</option>
                  {LUBRICANT_PRODUCTS.map((oil) => (
                    <option key={oil.id} value={oil.id}>
                      {oil.name} (৳ {oil.price})
                    </option>
                  ))}
                </select>

                {selectedOilId !== 'none' && (
                  <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5">
                    <span className="text-xs text-neutral-400">Qty:</span>
                    <button
                      onClick={() => setOilQuantity(Math.max(1, oilQuantity - 1))}
                      className="px-2 py-0.5 text-xs text-neutral-300 hover:text-white"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono font-bold text-white tabular-nums px-2">
                      {oilQuantity}
                    </span>
                    <button
                      onClick={() => setOilQuantity(oilQuantity + 1)}
                      className="px-2 py-0.5 text-xs text-neutral-300 hover:text-white"
                    >
                      +
                    </button>
                    <span className="text-xs text-amber-400 ml-auto font-mono">
                      + ৳ {oilCost}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Receipt Slip Preview Column */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 rounded-xl p-6 shadow-xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Estimate Slip Preview
                </span>
              </div>
              <span className="text-[11px] text-neutral-500 font-mono">24/7 FORECOURT</span>
            </div>

            {/* Simulated Receipt Body */}
            <div className="space-y-3 font-mono text-xs text-neutral-300 bg-neutral-900/80 p-4 rounded-lg border border-neutral-800/80">
              <div className="text-center pb-2 border-b border-dashed border-neutral-700 text-neutral-400">
                <div className="font-bold text-white text-sm font-brand">ROHIMA FILLING STATION</div>
                <div className="text-[10px] text-amber-400 font-sans">Mollahat, Bagerhat · Padma Oil Dealer</div>
                <div className="text-[10px]">MD: Milton (01715620844) · Manager: Malek (01713500659)</div>
              </div>

              {/* Fuel line item */}
              <div className="pt-1">
                <div className="flex justify-between font-semibold text-white">
                  <span>{currentFuel.name}</span>
                  <span className="tabular-nums">৳ {fuelCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>Rate: ৳ {currentFuel.pricePerLiter.toFixed(2)} / L</span>
                  <span className="text-amber-400 font-bold tabular-nums">
                    Vol: {fuelLiters} Liters
                  </span>
                </div>
              </div>

              {/* Oil line item if added */}
              {currentOil && (
                <div className="pt-2 border-t border-dashed border-neutral-800">
                  <div className="flex justify-between font-semibold text-white">
                    <span className="truncate pr-2">{currentOil.name}</span>
                    <span className="tabular-nums">৳ {oilCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-400">
                    <span>{oilQuantity} x ৳ {currentOil.price}</span>
                    <span className="text-neutral-400">{currentOil.unit}</span>
                  </div>
                </div>
              )}

              {/* Grand Total */}
              <div className="pt-3 border-t-2 border-neutral-700 flex justify-between items-baseline font-bold">
                <span className="text-sm text-white">TOTAL PAYABLE:</span>
                <span className="text-xl text-amber-400 font-digital tabular-nums">
                  ৳ {grandTotal.toFixed(2)}
                </span>
              </div>

              <div className="pt-2 text-[10px] text-neutral-500 border-t border-dashed border-neutral-800 text-center">
                Cashiers: Khalid (01706454929) & Milon (01727289571) · Padma Oil Quality
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={handleCopyReceipt}
                className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-neutral-950" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Estimate Slip</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setBudgetTaka(1000);
                  setTargetLiters(20);
                  setSelectedOilId('none');
                }}
                className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg"
                title="Reset calculator values"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
