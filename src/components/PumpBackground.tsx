import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const DEFAULT_PUMP_PHOTO = '/assets/aistudio/Gemini_Generated_Image_w6712w6712w6712w_f47bb9fd.jpg';

export const PUMP_BACKGROUND_SLIDES = [
  {
    url: '/assets/aistudio/Gemini_Generated_Image_w6712w6712w6712w_f47bb9fd.jpg',
    alt: 'Rohima Filling Station Night Operations with ENA & EMAD Coaches',
  },
  {
    url: '/assets/aistudio/image_e5d7b526.png',
    alt: 'MD Nazrul Islam Milton - Managing Director of Rohima Filling Station',
  },
  {
    url: '/assets/aistudio/Gemini_Generated_Image_jih0s0jih0s0jih0_aacb9927.jpg',
    alt: 'Rohima Filling Station 24/7 Night Canopy Refueling',
  },
  {
    url: '/assets/aistudio/Gemini_Generated_Image_agcemxagcemxagce_117287ea.jpg',
    alt: 'Rohima Filling Station Highway Coach Lineup',
  },
  {
    url: '/assets/aistudio/855896624_2313445269443652_9195498437762466614_n_f0357b55.jpg',
    alt: 'Rohima Filling Station Motorist & Highway Transport',
  },
  {
    url: '/assets/aistudio/image_34b7f0df.png',
    alt: 'Rohima Filling Station Daytime Highway Forecourt',
  },
];

export const PumpBackground: React.FC = () => {
  const [fadeOpacity, setFadeOpacity] = useState<number>(1);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatically change background picture every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % PUMP_BACKGROUND_SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll effect: keep photo still and smoothly fade it away as #fuel-prices section enters
  useEffect(() => {
    const handleScroll = () => {
      const priceSection = document.getElementById('fuel-prices');
      if (!priceSection) {
        const scrollY = window.scrollY;
        const fadeThreshold = 550;
        const newOpacity = Math.max(0, Math.min(1, 1 - scrollY / fadeThreshold));
        setFadeOpacity(newOpacity);
        return;
      }

      const rect = priceSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the top of #fuel-prices is below the screen (rect.top > windowHeight), opacity is 1
      // As #fuel-prices enters the viewport (rect.top goes from windowHeight down to 100px), fade opacity to 0
      const fadeDistance = windowHeight * 0.75;
      const progress = (rect.top - 100) / fadeDistance;
      const calculatedOpacity = Math.max(0, Math.min(1, progress));
      setFadeOpacity(calculatedOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + PUMP_BACKGROUND_SLIDES.length) % PUMP_BACKGROUND_SLIDES.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % PUMP_BACKGROUND_SLIDES.length);
  };

  return (
    <>
      {/* Fixed Still Background Container that cycles every 3 seconds and fades as #fuel-prices comes into view */}
      <div
        className="fixed inset-0 pointer-events-none select-none z-0 transition-opacity duration-150 ease-out"
        style={{
          opacity: fadeOpacity,
          visibility: fadeOpacity <= 0.01 ? 'hidden' : 'visible',
        }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* 3-Second Auto-Changing Slideshow (No black shade overlay — pure natural photos) */}
          {PUMP_BACKGROUND_SLIDES.map((slide, index) => (
            <img
              key={slide.url}
              src={slide.url}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
                index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Slideshow Controls in Hero (Only visible when at top) */}
      <div
        className="fixed top-20 right-4 sm:right-8 z-30 flex items-center gap-2 transition-opacity duration-200"
        style={{
          opacity: fadeOpacity > 0.3 ? 1 : 0,
          pointerEvents: fadeOpacity > 0.3 ? 'auto' : 'none',
        }}
      >
        <div className="flex items-center gap-1 px-2 py-1 bg-neutral-950/80 border border-neutral-700/80 backdrop-blur-md rounded-md shadow-lg">
          <button
            onClick={handlePrevSlide}
            className="p-1 text-neutral-300 hover:text-amber-400 transition-colors"
            title="Previous photo"
            aria-label="Previous background photo"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1 px-1">
            {PUMP_BACKGROUND_SLIDES.map((slide, idx) => (
              <button
                key={slide.url}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? 'w-4 bg-amber-400'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                title={`Photo ${idx + 1} of ${PUMP_BACKGROUND_SLIDES.length}`}
                aria-label={`Select photo ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextSlide}
            className="p-1 text-neutral-300 hover:text-amber-400 transition-colors"
            title="Next photo"
            aria-label="Next background photo"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="p-1 text-neutral-300 hover:text-amber-400 transition-colors border-l border-neutral-700/80 pl-1.5 ml-0.5"
            title={isPaused ? 'Resume 3s slideshow' : 'Pause 3s slideshow'}
            aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
          >
            {isPaused ? (
              <Play className="w-3 h-3 text-amber-400" />
            ) : (
              <Pause className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
