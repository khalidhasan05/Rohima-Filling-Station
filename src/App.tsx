/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PumpBackground } from './components/PumpBackground.tsx';
import { FuelPriceBoard } from './components/FuelPriceBoard.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { Calculator } from './components/Calculator.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { LocationAndHours } from './components/LocationAndHours.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { LubricantProduct } from './data/stationData.ts';

export default function App() {
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);
  const [calculatorFuelId, setCalculatorFuelId] = useState<string>('diesel');
  const [selectedOilForCalc, setSelectedOilForCalc] = useState<LubricantProduct | null>(null);

  const handleSelectFuelForCalculator = (fuelId: string) => {
    setCalculatorFuelId(fuelId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddProductToCalculator = (product: LubricantProduct) => {
    setSelectedOilForCalc(product);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col relative selection:bg-amber-500 selection:text-neutral-950 font-sans">
      {/* Top 3-Zone Navigation */}
      <Navbar
        onQuickCallClick={() => setIsCallModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 relative">
        {/* Still Background Photo: remains fixed behind the hero and smoothly fades as the fuel price section arrives */}
        <PumpBackground />

        {/* Hero Content flowing smoothly over the still pump photo */}
        <Hero
          onCallClick={() => setIsCallModalOpen(true)}
          onExploreProducts={handleScrollToProducts}
        />

        {/* All content from Daily Fuel Price Board downwards (Solid dark surface z-10) */}
        <div className="relative z-10 bg-neutral-950 shadow-2xl">
          {/* Live Fuel Rates Board (Diesel 135, Octane 165.10, Petrol 160.10) */}
          <FuelPriceBoard
            onSelectForCalculator={handleSelectFuelForCalculator}
          />

          {/* Products & Lubricants Section with all Oils, Fluids & Prices */}
          <ProductsSection
            onAddProductToCalculator={handleAddProductToCalculator}
          />

          {/* Interactive Volumetric & Receipt Calculator */}
          <Calculator
            initialFuelId={calculatorFuelId}
            selectedOilFromCatalog={selectedOilForCalc}
          />

          {/* Dedicated Employee & Forecourt Crew Showcase (14 staff members) */}
          <TeamSection />

          {/* Location, 24/7 Hours, Forecourt Amenities & Map in Mollahat, Bagerhat */}
          <LocationAndHours />
        </div>
      </main>

      {/* Professional Quiet Footer */}
      <Footer />

      {/* Quick Phone Call & Hotlines Modal */}
      <ContactModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </div>
  );
}
