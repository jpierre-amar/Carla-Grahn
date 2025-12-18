"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ArtworkImage } from "@/data/portfolioImages";

interface GalleryProps {
  images: ArtworkImage[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(images.length).fill(false));
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setIsVisible((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [images.length]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      {/* Masonry Grid */}
      <div className={`masonry-grid ${className}`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`masonry-item transition-all duration-700 ${
              isVisible[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${(index % 6) * 100}ms` }}
          >
            <div
              className="group cursor-pointer image-hover rounded-sm overflow-hidden bg-muted touch-manipulation"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${image.title || image.alt}`}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-earth/0 group-hover:bg-earth/60 transition-all duration-500 flex items-end justify-start p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-serif text-xl text-cream mb-1">
                      {image.title}
                    </h3>
                    {image.materials && (
                      <p className="font-sans text-sm text-cream/80">
                        {image.materials}
                      </p>
                    )}
                    {image.year && (
                      <p className="font-sans text-xs text-cream/60 mt-1">
                        {image.year}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-earth/95 border-none touch-none">
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 md:top-4 right-2 md:right-4 z-50 text-cream hover:bg-cream/10 min-h-[44px] min-w-[44px]"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 text-cream hover:bg-cream/10 min-h-[44px] min-w-[44px]"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center max-w-full max-h-full p-4 md:p-8">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-2xl text-cream mb-2">
                    {images[selectedIndex].title}
                  </h3>
                  {images[selectedIndex].materials && (
                    <p className="font-sans text-sm text-cream/80 mb-1">
                      {images[selectedIndex].materials}
                    </p>
                  )}
                  {images[selectedIndex].description && (
                    <p className="font-sans text-sm text-cream/70 max-w-lg">
                      {images[selectedIndex].description}
                    </p>
                  )}
                  {images[selectedIndex].year && (
                    <p className="font-sans text-xs text-cream/50 mt-2">
                      {images[selectedIndex].year}
                    </p>
                  )}
                </div>
              </div>

              {/* Next button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 text-cream hover:bg-cream/10 min-h-[44px] min-w-[44px]"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/60 font-sans text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;


