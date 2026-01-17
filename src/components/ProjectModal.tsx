import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";
import ProjectGallery from "./ProjectGallery";

type Project = {
  title: string;
  techStack: string[];
  details: string[];
  github?: string;
  type: string;
  shotPosition: { x: string; y: string };
  demo?: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset the image index to 0 whenever a new project is opened.
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Focus trap and Escape key handling
  useEffect(() => {
    if (!project) return;

    // Trap focus in modal
    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (!isLightboxOpen) {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, isLightboxOpen, onClose]);

  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[100] p-4 transition-opacity duration-300"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          ref={modalRef}
          className="bg-[#1F2937] border-2 border-orange-500/50 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 animate-modal-enter focus:outline-none"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          tabIndex={-1}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-orange-500 transition-colors z-20"
            aria-label="Close project details"
          >
            <X size={28} />
          </button>

          {/* --- Image Gallery Section --- */}
          <ProjectGallery
            project={project}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            onImageClick={() => setIsLightboxOpen(true)}
          />
          {/* --- End Image Gallery Section --- */}

          <div className="p-6 sm:p-8">
            <h2
              id="modal-title"
              className="text-3xl font-bold text-orange-500 tracking-wide mb-4"
            >
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#111827] text-sm text-gray-300 rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-gray-300 text-base">
              {project.details.map((point, index) => (
                <p key={index} className="leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
            {(project.github || project.demo) && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 mt-6 border-t border-gray-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-orange-600 hover:bg-orange-700 font-semibold px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    <Github size={20} /> View Game Film
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white bg-gray-600 hover:bg-gray-700 font-semibold px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                  >
                    <ExternalLink size={20} /> See Live Action
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Lightbox Section --- */}
      <Lightbox
        images={project.images || []}
        initialIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
};

export { ProjectModal };
