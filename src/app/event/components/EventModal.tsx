"use client";

import Image from "next/image";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  image,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-3xl max-h-[80vh] rounded-xl shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-neutral-200">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-lg font-bold text-neutral-700 hover:text-red-600 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 pt-4">
          {image && (
            <div className="mb-5">
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden bg-neutral-200">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Deskripsi
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-neutral-700 whitespace-pre-line">
            {description}
          </p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
