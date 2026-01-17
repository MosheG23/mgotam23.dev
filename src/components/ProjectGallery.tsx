import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import Image from "next/image";
import type React from "react";
import PlaceholderImage from "./PlaceholderImage";

type ProjectGalleryProps = {
  project: {
    title: string;
    images?: { src: string; alt: string }[];
  };
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  onImageClick: () => void;
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  project,
  currentImageIndex,
  setCurrentImageIndex,
  onImageClick,
}) => {
  const images = project.images || [];
  const hasImages = images.length > 0;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1,
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  return (
    <div className="relative w-full">
      {hasImages ? (
        <>
          {/* Main Image Display */}
          <div className="relative w-full h-56 bg-[#111827] rounded-t-lg overflow-hidden group">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            ))}

            {/* Overlay with zoom button */}
            <div
              className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer"
              onClick={onImageClick}
            >
              <Maximize size={48} className="text-white drop-shadow-lg" />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-mono px-2 py-1 rounded-md z-10">
              {currentImageIndex + 1} / {images.length}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-orange-500/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="w-full bg-[#111827] p-2">
              <div className="flex space-x-2 overflow-x-auto pb-1">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`thumb-${image.src}`}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`cursor-pointer flex-shrink-0 w-24 h-16 relative rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111827] focus:ring-orange-500 transition-all duration-300 ${
                      index === currentImageIndex
                        ? "border-2 border-orange-500 opacity-100"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <PlaceholderImage
          text={project.title}
          width={600}
          height={224}
          pattern="dynamic-hoops"
          bgColor="#111827"
          textColor="#F97316"
          className="w-full h-56 object-cover rounded-t-lg"
        />
      )}
    </div>
  );
};

export default ProjectGallery;
