import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, MessageSquare, Shield, CheckCircle, Navigation, Copy, Check, Send } from 'lucide-react';
import { STATION_INFO } from '../data/stationData.ts';

export const LocationAndHours: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    fuelType: 'Diesel (HSD)',
    volumeLiters: '',
    notes: ''
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STATION_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.phone) return;
    setInquirySubmitted(true);
  };

  return (
    <section id="location-hours" className="py-16 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            Forecourt Access & Availability
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-brand">
            Location, Hours & Station Amenities
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            Conveniently positioned on the main highway corridor with dedicated wide lanes for long-haul cargo trucks, buses, private cars, and motorbikes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Hours Card */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-brand">
                    Operational Hours
                  </h3>
                  <div className="text-xs text-emerald-400 font-semibold">
                    Open 24 Hours / 7 Days a Week
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-300 border-t border-neutral-800 pt-3">
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Station Forecourt</span>
                  <span className="font-semibold text-white">Open 24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Diesel Daytime (7 AM – 10 PM)</span>
                  <span className="font-semibold text-amber-400">6 Active Nozzles</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Diesel Nighttime (10 PM – 7 AM)</span>
                  <span className="font-semibold text-sky-400">4 Active Nozzles (Nazrul & Kabir)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Octane & Petrol</span>
                  <span className="font-semibold text-emerald-400">1 Dedicated Nozzle Each (24/7)</span>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-6">
              <h3 className="text-base font-bold text-white font-brand mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Direct Contact Numbers</span>
              </h3>

              <div className="space-y-2.5 text-xs">
                {/* Managing Director MD Milton */}
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-amber-400 font-medium">MD (Nazrul Islam Milton)</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      {STATION_INFO.phoneMD}
                    </div>
                  </div>
                  <a
                    href={`tel:${STATION_INFO.phoneMD}`}
                    className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-md transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Station Manager Abdul Malek */}
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-sky-400 font-medium">Station Manager (Abdul Malek)</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      {STATION_INFO.phonePrimary}
                    </div>
                  </div>
                  <a
                    href={`tel:${STATION_INFO.phonePrimary}`}
                    className="px-3 py-1.5 text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-neutral-950 rounded-md transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* Cashier Khalid Hasan */}
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Cashier (Khalid Hasan)</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      {STATION_INFO.phoneSecondary}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`https://wa.me/${STATION_INFO.whatsapp}?text=Hello%20Rohima%20Filling%20Station,%20Khalid%20vai`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-md transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${STATION_INFO.phoneSecondary}`}
                      className="px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-md transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* Cashier Milon Fokir */}
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-neutral-400 font-medium">Cashier (Milon Fokir)</div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      {STATION_INFO.phoneMilon}
                    </div>
                  </div>
                  <a
                    href={`tel:${STATION_INFO.phoneMilon}`}
                    className="px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-md transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Map Visual & Highway Nav */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white font-brand flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Station Highway Location</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {STATION_INFO.address}
                  </p>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-md text-neutral-300 transition-colors"
                  title="Copy full address to clipboard"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAddress ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Realistic Map Card Mockup */}
              <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 mb-5">
                {/* SVG Highway Layout Illustration */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 600 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Terrain & Fields */}
                  <rect width="600" height="300" fill="#090d16" />
                  <path d="M0 60 Q 300 80 600 50 L 600 0 L 0 0 Z" fill="#0d1527" opacity="0.5" />

                  {/* Main National Highway Corridor */}
                  <path
                    d="M-50 180 Q 250 160 650 190"
                    stroke="#1e293b"
                    strokeWidth="56"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-50 180 Q 250 160 650 190"
                    stroke="#334155"
                    strokeWidth="50"
                    strokeLinecap="round"
                  />
                  {/* Highway Centerline */}
                  <path
                    d="M-50 180 Q 250 160 650 190"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeDasharray="14 12"
                  />

                  {/* Station Entry Ramp & Forecourt Area */}
                  <path
                    d="M180 180 C 220 180 230 110 300 110 C 370 110 380 180 420 180"
                    stroke="#475569"
                    strokeWidth="32"
                    fill="none"
                  />
                  <rect x="230" y="80" width="140" height="40" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                  <text x="300" y="104" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                    ROHIMA PUMP · MOLLAHAT
                  </text>

                  {/* Pin Drop */}
                  <circle cx="300" cy="100" r="14" fill="#ef4444" opacity="0.3" />
                  <circle cx="300" cy="100" r="7" fill="#ef4444" />
                  <circle cx="300" cy="100" r="3" fill="#ffffff" />

                  {/* Fuel Tanker Lane indicator */}
                  <text x="300" y="145" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="sans-serif">
                    MOLLAHAT, BAGERHAT HIGHWAY (PADMA OIL FORECOURT 24/7)
                  </text>
                </svg>

                {/* Live Navigation Overlay Tag */}
                <div className="absolute bottom-3 left-3 bg-neutral-950/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-neutral-700 text-xs text-neutral-300 flex items-center gap-2">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mollahat, Bagerhat Corridor · Wide High-Flow Entry</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps/search/Rohima+Filling+Station+Mollahat+Bagerhat"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Mollahat in Google Maps</span>
              </a>

              <a
                href={`tel:${STATION_INFO.phonePrimary}`}
                className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call for Direction Assistance</span>
              </a>
            </div>
          </div>
        </div>

        {/* Station Amenities Grid */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
            Station Forecourt Amenities for Drivers & Passengers
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATION_INFO.amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-white font-brand mb-1 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bulk Diesel / Fleet Inquiry Form */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-800 rounded-xl p-6 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-white font-brand mb-1">
              Bulk Fuel or Fleet Supply Inquiry
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Need bulk diesel supply for tractors, transport truck fleets, construction equipment, or commercial generators? Submit your inquiry directly to Managing Director MD Nazrul Islam Milton.
            </p>

            {inquirySubmitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  Thank you, {inquiryData.name}. Your inquiry for {inquiryData.fuelType} has been recorded. Manager Abdul Malek will contact you shortly at {inquiryData.phone}.
                </span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karim Transport / Haji Enterprise"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 01712-XXXXXX"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Fuel Required
                    </label>
                    <select
                      value={inquiryData.fuelType}
                      onChange={(e) => setInquiryData({ ...inquiryData, fuelType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Diesel (HSD)">Diesel (HSD) - Commercial / Transport</option>
                      <option value="Petrol (Motor Spirit)">Petrol (Motor Spirit)</option>
                      <option value="Octane (High Octane)">Octane (High Octane Blend)</option>
                      <option value="Lubricants & Engine Oil">Lubricants & Engine Oils (Bulk Cans)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Estimated Volume (Liters / Cans)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 200 Liters / 1 Barrel"
                      value={inquiryData.volumeLiters}
                      onChange={(e) => setInquiryData({ ...inquiryData, volumeLiters: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end pt-2">
                  <button
                    type="submit"
                    className="py-2.5 px-5 text-xs font-semibold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center gap-2 shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Supply Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
