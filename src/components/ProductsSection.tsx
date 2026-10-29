import React, { useState, useMemo } from 'react';
import { Search, Filter, Droplets, Check, Phone, MessageSquare, ShoppingCart, Info, X } from 'lucide-react';
import { LUBRICANT_PRODUCTS, LubricantProduct, STATION_INFO } from '../data/stationData.ts';

interface ProductsSectionProps {
  onAddProductToCalculator?: (product: LubricantProduct) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddProductToCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductForModal, setSelectedProductForModal] = useState<LubricantProduct | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedSuccess, setAddedSuccess] = useState<string | null>(null);

  const categories = ['All', 'Engine Oil', 'Gear & Transmission', 'Brake Fluid'];

  const filteredProducts = useMemo(() => {
    return LUBRICANT_PRODUCTS.filter((prod) => {
      const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (prod.viscosityGrade && prod.viscosityGrade.toLowerCase().includes(searchQuery.toLowerCase())) ||
        prod.compatibility.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenModal = (product: LubricantProduct) => {
    setSelectedProductForModal(product);
    setQuantity(1);
  };

  const handleWhatsAppInquiry = (product: LubricantProduct, qty: number) => {
    const total = product.price * qty;
    const text = encodeURIComponent(
      `Hello Rohima Filling Station!\nI want to inquire about purchasing:\nProduct: ${product.name}\nQuantity: ${qty} (${product.unit})\nEstimated Cost: ৳ ${total} Taka.\nPlease confirm availability at the cash counter.`
    );
    window.open(`https://wa.me/${STATION_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="products" className="py-16 bg-neutral-900/50 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Genuine Lubricants & Fluids
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-brand">
              Lubricants, Engine Oils & Fluids
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              100% original manufacturer-sealed oils for heavy vehicles, diesel pickups, passenger cars, and motorcycles. Available at our station cashier counter.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-medium">
            Cashiers in charge:{' '}
            <a href={`tel:${STATION_INFO.phoneSecondary}`} className="text-white font-semibold hover:text-amber-400">
              Khalid Hasan ({STATION_INFO.phoneSecondary})
            </a>{' '}
            ·{' '}
            <a href={`tel:${STATION_INFO.phoneMilon}`} className="text-white font-semibold hover:text-amber-400">
              Milon Fokir ({STATION_INFO.phoneMilon})
            </a>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
          {/* Category Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {cat === 'All' ? 'All Lubricants' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Mobil, 20W-50, Brake Fluid..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-neutral-950/40 rounded-xl border border-neutral-800/80">
            <Droplets className="w-8 h-8 text-neutral-600 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-medium">No lubricants match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 flex flex-col justify-between transition-all duration-150 hover:shadow-lg"
                >
                  <div>
                    {/* Brand & Category line */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                      <span className="font-semibold text-amber-400/90">{product.brand}</span>
                      <span>{product.category}</span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-base font-bold text-white font-brand mb-1">
                      {product.name}
                    </h3>

                    {/* Viscosity / Pack size quiet metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                      {product.viscosityGrade && (
                        <>
                          <span className="font-mono text-neutral-300">{product.viscosityGrade}</span>
                          <span aria-hidden="true" className="text-neutral-600">·</span>
                        </>
                      )}
                      <span>{product.unit}</span>
                    </div>

                    {/* Price Container */}
                    <div className="bg-neutral-900/90 rounded-lg p-3 border border-neutral-800/80 mb-3 flex items-baseline justify-between">
                      <span className="text-xs text-neutral-400">Station Price</span>
                      <div className="text-right">
                        <span className="text-xl font-extrabold text-amber-400 font-digital tabular-nums">
                          ৳ {product.price}
                        </span>
                        <span className="text-[11px] text-neutral-500 ml-1">Taka</span>
                      </div>
                    </div>

                    {/* Highlight Description */}
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {product.highlight}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2 border-t border-neutral-900">
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="w-full py-2 px-3 text-xs font-semibold text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Inquire / Details</span>
                    </button>

                    {onAddProductToCalculator && (
                      <button
                        onClick={() => {
                          onAddProductToCalculator(product);
                          setAddedSuccess(product.id);
                          setTimeout(() => setAddedSuccess(null), 2000);
                        }}
                        className="w-full py-1.5 px-3 text-[11px] font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                      >
                        {addedSuccess === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Added to Calculator</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Add to Total Receipt</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Product Details & Inquiry Modal */}
        {selectedProductForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl relative">
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                <span>{selectedProductForModal.brand}</span>
                <span>·</span>
                <span>{selectedProductForModal.category}</span>
              </div>

              <h3 className="text-xl font-bold text-white font-brand mb-2">
                {selectedProductForModal.name}
              </h3>

              {/* Price Banner */}
              <div className="flex items-center justify-between p-3 bg-neutral-950 rounded-lg border border-neutral-800 my-4">
                <div>
                  <div className="text-xs text-neutral-400">Unit Price</div>
                  <div className="text-2xl font-bold text-amber-400 font-digital tabular-nums">
                    ৳ {selectedProductForModal.price}{' '}
                    <span className="text-xs font-normal text-neutral-400 font-sans">
                      Taka ({selectedProductForModal.unit})
                    </span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Qty:</span>
                  <div className="flex items-center bg-neutral-900 border border-neutral-700 rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-sm font-semibold text-neutral-300 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-2.5 py-1 text-xs font-mono font-bold text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-sm font-semibold text-neutral-300 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="text-right text-xs text-neutral-300 mb-4">
                Estimated Total: <span className="text-sm font-bold text-white font-mono">৳ {selectedProductForModal.price * quantity} Taka</span>
              </div>

              <div className="space-y-3 text-xs text-neutral-300 mb-6 bg-neutral-950/60 p-4 rounded-lg border border-neutral-800/80">
                <div>
                  <span className="font-semibold text-neutral-400 block mb-0.5">Recommended Vehicle Application:</span>
                  <p>{selectedProductForModal.compatibility}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-400 block mb-0.5">Product Description & Benefits:</span>
                  <p className="leading-relaxed">{selectedProductForModal.description}</p>
                </div>
                <div>
                  <span className="font-semibold text-neutral-400 block mb-0.5">Forecourt Availability:</span>
                  <p className="text-emerald-400">In Stock at Rohima Filling Station cashier counter</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleWhatsAppInquiry(selectedProductForModal, quantity)}
                  className="w-full sm:flex-1 py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve via WhatsApp</span>
                </button>

                <a
                  href={`tel:${STATION_INFO.phonePrimary}`}
                  className="w-full sm:w-auto py-2.5 px-4 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Cashier Desk</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
