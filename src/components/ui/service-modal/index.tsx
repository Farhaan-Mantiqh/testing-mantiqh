import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { servicesModalDataMap } from '../../../data/servicesModalData';
import { ModalHeader } from './ModalHeader';
import { ModalDiagramPlaceholder } from './ModalDiagramPlaceholder';
import { ModalCapabilities } from './ModalCapabilities';
import { ModalCarousel } from './ModalCarousel';
import { ModalImplementation } from './ModalImplementation';
import { ModalOutcomes } from './ModalOutcomes';

export const ServiceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId: string }>;
      setActiveServiceId(customEvent.detail.serviceId);
      setIsOpen(true);

      document.body.style.overflow = 'hidden';
      const lenis = (window as Window & typeof globalThis & { lenis?: { stop: () => void, start: () => void } }).lenis;
      if (lenis) lenis.stop();
    };

    window.addEventListener('open-service-modal', handleOpenModal);
    return () => window.removeEventListener('open-service-modal', handleOpenModal);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    const lenis = (window as Window & typeof globalThis & { lenis?: { stop: () => void, start: () => void } }).lenis;
    if (lenis) lenis.start();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isOpen, activeServiceId]);

  if (!isOpen || !activeServiceId) return null;

  const data = servicesModalDataMap[activeServiceId];
  if (!data) return null;

  return (
    // Overlay - fixed, covers viewport
    <div
      className="fixed inset-0 z-[999] bg-slate-900/45 backdrop-blur-[12px] animate-modal-fade-in"
      onClick={handleClose}
    >
      {/* Scroll container - this is what scrolls, NOT the background */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 overflow-y-auto overflow-x-hidden pt-[60px] pb-10 px-4 md:px-4 max-md:pt-0 max-md:px-0 max-md:pb-0"
        style={{ WebkitOverflowScrolling: 'touch' }}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
      >
        {/* White modal panel */}
        <div className="relative w-full max-w-[1280px] mx-auto bg-white rounded-[20px] pb-12 max-md:rounded-none max-md:pb-16 animate-modal-slide-up">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 w-9 h-9 rounded-lg border border-[#D0E5FB] bg-[#F0F7FF] text-[#387EC1] flex items-center justify-center cursor-pointer hover:bg-[#E0F0FE] hover:text-[#2B6196] transition-all duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>

          {/* Modal sections */}
          <ModalHeader data={data.modalHeader} />
          <ModalDiagramPlaceholder serviceId={data.id} data={data.diagram} />
          <ModalCapabilities data={data.capabilities} />
          <ModalCarousel data={data.carousel} />
          <ModalImplementation data={data.implementation} />
          <ModalOutcomes data={data.outcomes} />
        </div>
      </div>
    </div>
  );
};
