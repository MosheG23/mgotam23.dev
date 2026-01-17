import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

type LightboxProps = {
  images: { src: string; alt: string; caption?: string }[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, nextImage, prevImage]); // Dependencies handled below (next/prev are callbacks)

  // Gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[120] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="cursor-pointer absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-20"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <div
        className="relative w-full h-full flex items-center justify-center touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={prevImage}
            className="hidden md:block cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <div className="flex flex-col items-center max-w-full max-h-full">
          <div className="relative w-full h-[85vh] flex items-center justify-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
          {images[currentIndex].alt && (
            <p className="text-white/80 text-center mt-2 bg-black/30 px-4 py-2 rounded-lg z-20">
              {images[currentIndex].alt}
            </p>
          )}
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            className="hidden md:block cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-20"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
