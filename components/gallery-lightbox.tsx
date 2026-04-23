"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  image: string;
  category?: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
}

export function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedImage = images.find((img) => img.id === selectedId);
  const selectedIndex = images.findIndex((img) => img.id === selectedId);

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedId(images[selectedIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedId(images[selectedIndex + 1].id);
    }
  };

  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (e.key === "Escape") setSelectedId(null);
  //   if (e.key === "ArrowLeft") goToPrevious();
  //   if (e.key === "ArrowRight") goToNext();
  // };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedId(image.id)}
            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square bg-muted"
          >
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              <h3 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
          // onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Previous Button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <h3 className="text-white font-semibold text-lg">
              {selectedImage.title}
            </h3>
            <p className="text-white/70 text-sm">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
