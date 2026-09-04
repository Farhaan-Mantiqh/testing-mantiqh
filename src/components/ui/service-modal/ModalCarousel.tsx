import React, { useEffect, useRef, useState } from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

interface ModalCarouselProps {
  data: ServiceModalData['carousel'];
}

export const ModalCarousel: React.FC<ModalCarouselProps> = ({ data }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(data.items[0]);
  const dataRef = useRef(data.items);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    dataRef.current = data.items;
    setActiveItem(data.items[0]);
  }, [data]);

  const updateActiveContent = (offset = 0) => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    const activeElement = items[offset];
    if (!activeElement) return;
    const idx = parseInt(activeElement.dataset.index || "0");
    const currentData = dataRef.current[idx];
    if (currentData) setActiveItem(currentData);
  };

  const updateLayout = (duration = 0.8, offset = 0) => {
    const track = trackRef.current;
    if (!track) return;

    const sequences = {
      desktop: [50, 25, 15, 10, 4, 4],
      tablet: [60, 30, 10],
      mobile: [100],
    };
    const GAP = 4;
    const MIN_WIDTH = 18;

    const getActiveConfig = () => {
      const width = window.innerWidth;
      if (width < 768) return { seq: sequences.mobile, gaps: 0 };
      if (width < 1024) return { seq: sequences.tablet, gaps: 2 };
      return { seq: sequences.desktop, gaps: dataRef.current.length > 1 ? dataRef.current.length - 1 : 0 };
    };

    const { seq, gaps } = getActiveConfig();
    const items = Array.from(track.children) as HTMLElement[];
    const adjustment = gaps > 0 ? (gaps * GAP) / (gaps + 1) : 0;

    items.forEach((item, i) => {
      let targetPercent = 4;
      if (i < offset) {
        targetPercent = seq[i] || seq[seq.length - 1];
      } else {
        const seqIdx = i - offset;
        targetPercent = seq[seqIdx] || (window.innerWidth < 1024 ? 0 : 4);
      }
      const targetWidth = targetPercent === 0 ? "0px" : `calc(${targetPercent}% - ${adjustment}px)`;
      const isLastVisible = i - offset === seq.length - 1;
      const targetMargin = i < offset || isLastVisible || targetPercent === 0 ? "0px" : `${GAP}px`;

      gsap.to(item, {
        width: targetWidth,
        minWidth: targetPercent === 0 ? "0px" : `${MIN_WIDTH}px`,
        marginRight: targetMargin,
        duration,
        ease: "power3.inOut",
      });
    });

    if (duration > 0) updateActiveContent(offset);
  };

  const slideNext = (count = 1) => {
    const track = trackRef.current;
    if (!track || isAnimatingRef.current || count <= 0) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;

    isAnimatingRef.current = true;
    const slidingOut = items.slice(0, count);
    let totalMove = 0;
    slidingOut.forEach((item) => {
      totalMove += item.getBoundingClientRect().width + (parseFloat(item.style.marginRight) || 0);
    });
    slidingOut.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    const tl = gsap.timeline({
      onComplete: () => {
        slidingOut.forEach((item) => item.remove());
        gsap.set(track, { x: 0 });
        isAnimatingRef.current = false;
      },
    });
    tl.to(track, { x: -totalMove, duration: 0.8, ease: "power3.inOut" }, 0);
    updateLayout(0.8, count);
  };

  const slidePrev = (count = 1) => {
    const track = trackRef.current;
    if (!track || isAnimatingRef.current || count <= 0) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;

    isAnimatingRef.current = true;
    const slidingIn = items.slice(items.length - count);
    let totalMove = 0;
    slidingIn.forEach((item) => {
      totalMove += item.getBoundingClientRect().width + (parseFloat(item.style.marginRight) || 0);
    });
    for (let i = slidingIn.length - 1; i >= 0; i--) {
      const clone = slidingIn[i].cloneNode(true) as HTMLElement;
      track.prepend(clone);
    }

    gsap.set(track, { x: -totalMove });
    updateLayout(0.8, 0);
    const tl = gsap.timeline({
      onComplete: () => {
        const currentItems = Array.from(track.children) as HTMLElement[];
        for (let i = 0; i < count; i++) {
          currentItems[currentItems.length - 1 - i].remove();
        }
        gsap.set(track, { x: 0 });
        isAnimatingRef.current = false;
      },
    });
    tl.to(track, { x: 0, duration: 0.8, ease: "power3.inOut" }, 0);
  };

  const handleNext = () => slideNext(1);
  const handlePrev = () => slidePrev(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateLayout(0);

    const handleTrackClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const item = target.closest("[data-carousel-item]") as HTMLElement;
      if (item && track.contains(item)) {
        const items = Array.from(track.children);
        const index = items.indexOf(item);
        if (index > 0) slideNext(index);
      }
    };
    track.addEventListener("click", handleTrackClick);

    const handleResize = () => updateLayout(0);
    window.addEventListener("resize", handleResize);

    return () => {
      track.removeEventListener("click", handleTrackClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  return (
    <div className="px-12 py-12 max-md:px-6 max-md:py-10">
      {/* Header row */}
      <div className="flex justify-between items-end mb-6 gap-4">
        <h3 className="text-h4 font-medium text-[#0F172A]">
          {data.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-9 h-9 border border-slate-300 rounded-md bg-white text-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="w-9 h-9 border border-slate-300 rounded-md bg-white text-slate-700 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="flex items-start">
          {data.items.map((item, i) => (
            <div
              key={i}
              data-carousel-item
              data-index={i}
              className="shrink-0 relative overflow-hidden rounded-xl bg-slate-200 h-70 md:h-85 cursor-pointer"
              style={{ minWidth: '18px', willChange: 'width, transform' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-5">
        <h4 className="text-lg font-semibold text-[#0F172A] mb-1.5">
          {activeItem?.title}
        </h4>
        <p className="text-sm text-[#454751] font-normal leading-relaxed max-w-125">
          {activeItem?.desc}
        </p>
      </div>
    </div>
  );
};
