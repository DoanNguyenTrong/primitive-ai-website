
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
  className?: string;
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images, className }) => {
  return (
    <Carousel className={`w-full ${className || ''}`}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
              {(image.title || image.description) && (
                <div className="p-4 bg-white">
                  {image.title && (
                    <h3 className="text-lg font-semibold mb-2 text-center">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-gray-600 text-center">{image.description}</p>
                  )}
                </div>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 lg:-left-12" />
      <CarouselNext className="right-2 lg:-right-12" />
    </Carousel>
  );
};

export default GalleryCarousel;
