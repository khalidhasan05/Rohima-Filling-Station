import React, { useState } from 'react';
import { QrCode, Copy, Check, X, Smartphone, Share2, ExternalLink } from 'lucide-react';

interface QrShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  devUrl: string;
  sharedUrl: string;
}

export const QrShareModal: React.FC<QrShareModalProps> = ({ isOpen, onClose, devUrl, sharedUrl }) => {
  const [activeTab, setActiveTab] = useState<'dev' | 'shared'>('dev');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = activeTab === 'dev' ? devUrl : sharedUrl;

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
          <Smartphone className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-white font-brand mb-1">
          Test on Your Mobile Phone
        </h3>
        <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
          Select an access method below to open Rohima Filling Station on your mobile browser:
        </p>

        {/* Tab switch */}
        <div className="flex p-1 bg-neutral-950 rounded-lg border border-neutral-800 mb-4">
          <button
            onClick={() => setActiveTab('dev')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'dev'
                ? 'bg-amber-500 text-neutral-950 shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Direct Dev Link (Active Now)
          </button>
          <button
            onClick={() => setActiveTab('shared')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'shared'
                ? 'bg-amber-500 text-neutral-950 shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Public Shared Link
          </button>
        </div>

        {/* Informational tip for the selected tab */}
        {activeTab === 'dev' ? (
          <div className="text-[11px] text-amber-300/90 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2.5 mb-4 text-left">
            💡 <strong>Fastest test:</strong> Open this link on your phone while logged into your Google account (<strong>khalidhasanpranta05@gmail.com</strong>) in your mobile browser.
          </div>
        ) : (
          <div className="text-[11px] text-sky-300/90 bg-sky-500/10 border border-sky-500/20 rounded-lg p-2.5 mb-4 text-left">
            📌 <strong>To enable the Public link:</strong> Click the <strong>"Share"</strong> button in the top-right corner of Google AI Studio. This activates the public URL for anyone without login!
          </div>
        )}

        {/* QR Code Container */}
        <div className="bg-white p-3 rounded-xl inline-block shadow-lg mb-4">
          <img
            src={qrImageUrl}
            alt="Scan QR to open on phone"
            className="w-44 h-44 mx-auto"
            loading="eager"
          />
        </div>

        {/* Direct Link Box */}
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 flex items-center justify-between gap-2 mb-4 text-left">
          <div className="text-[11px] font-mono text-neutral-300 truncate select-all flex-1">
            {currentUrl}
          </div>
          <button
            onClick={() => handleCopy(currentUrl)}
            className="px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-amber-400 rounded-md transition-colors shrink-0 flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent('Test Rohima Filling Station website: ' + currentUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Send to WhatsApp</span>
          </a>

          <a
            href={currentUrl}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 rounded-lg transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};
