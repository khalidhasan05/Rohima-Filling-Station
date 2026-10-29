import React from 'react';
import { Phone, MessageSquare, X, Shield, Clock } from 'lucide-react';
import { STATION_INFO } from '../data/stationData.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Phone className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white font-brand">
            Rohima Filling Station Hotlines
          </h3>
        </div>
        <p className="text-xs text-neutral-400 mb-5">
          Available 24 hours a day for motorist assistance, tanker supplies, and billing queries.
        </p>

        <div className="space-y-2.5 mb-6 max-h-[60vh] overflow-y-auto pr-1">
          {/* MD Milton Hotline */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                Managing Director (MD)
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                MD Nazrul Islam Milton
              </div>
              <div className="text-xs font-mono text-neutral-400">
                {STATION_INFO.phoneMD}
              </div>
            </div>
            <a
              href={`tel:${STATION_INFO.phoneMD}`}
              className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-md transition-colors"
            >
              Call MD
            </a>
          </div>

          {/* Manager Hotline */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-sky-400 font-semibold uppercase tracking-wider">
                Station Manager Desk
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Abdul Malek
              </div>
              <div className="text-xs font-mono text-neutral-400">
                {STATION_INFO.phonePrimary}
              </div>
            </div>
            <a
              href={`tel:${STATION_INFO.phonePrimary}`}
              className="px-3 py-1.5 text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-neutral-950 rounded-md transition-colors"
            >
              Call Manager
            </a>
          </div>

          {/* Cashier Khalid Hasan */}
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                Cash Desk & Billing
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Khalid Hasan
              </div>
              <div className="text-xs font-mono text-neutral-400">
                {STATION_INFO.phoneSecondary}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href={`https://wa.me/${STATION_INFO.whatsapp}?text=Hello%20Khalid%20vai`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-md transition-colors"
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
          <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                Cash Desk & Accounts
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Milon Fokir
              </div>
              <div className="text-xs font-mono text-neutral-400">
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

        <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open 24/7 in Mollahat, Bagerhat</span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
