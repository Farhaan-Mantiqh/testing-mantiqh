import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

import './ScrollReveal.css';

interface ScrollRevealProps {
  children?: React.ReactNode;
  text?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  baseY?: number;
  revealInitialWords?: number;
  containerClassName?: string;
  textClassName?: string;
}

const ScrollReveal = ({
  children,
  text,
  enableBlur = true,
  baseOpacity = 0.1,
  blurStrength = 5,
  baseY = 30,
  revealInitialWords = 0,
  containerClassName = '',
  textClassName = '',
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const words = useMemo(() => {
    const rawText = text || (typeof children === 'string' ? children : '');
    const parts = rawText.split(/(\s+)/);
    let wordCount = 0;
    return parts.map((part: string, index: number) => {
      if (part.match(/^\s+$/)) return { part, index, isSpace: true, wordIndex: -1 };
      const wordIndex = wordCount++;
      return { part, index, isSpace: false, wordIndex };
    });
  }, [children, text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollEl = el.closest('.scroll-reveal-container') as HTMLElement | null;
    if (!scrollEl) return;

    const animatedWords = Array.from(el.querySelectorAll('.word--animated')) as HTMLElement[];
    if (animatedWords.length === 0) return;

    // Set initial blurred state immediately
    gsap.set(animatedWords, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      y: baseY,
    });

    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;
    const lerpFactor = 0.1; // lower = slower & smoother

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const applyProgress = (progress: number) => {
      animatedWords.forEach((word, i) => {
        const wordStart = (i / animatedWords.length) * 0.7;
        const wordEnd = wordStart + 0.3;
        const wordProgress = Math.max(0, Math.min(1, (progress - wordStart) / (wordEnd - wordStart)));

        gsap.set(word, {
          opacity: baseOpacity + (1 - baseOpacity) * wordProgress,
          filter: enableBlur ? `blur(${blurStrength * (1 - wordProgress)}px)` : 'none',
          y: baseY * (1 - wordProgress),
        });
      });
    };

    const isTouch = typeof window !== 'undefined' && 
      ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
      window.innerWidth <= 1024;

    const tick = () => {
      currentProgress = lerp(currentProgress, targetProgress, lerpFactor);
      applyProgress(currentProgress);

      if (!isTouch) {
        const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
        if (maxScroll > 0) {
          scrollEl.scrollTop = currentProgress * maxScroll;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    // Use wheel event to manually control scroll speed (prevents first-tick jumps)
    const onWheel = (e: WheelEvent) => {
      if (targetProgress <= 0 && e.deltaY < 0) return; // allow page scroll up
      if (targetProgress >= 1 && e.deltaY > 0) return; // allow page scroll down

      e.preventDefault();
      // sensitivity: lower = slower scroll needed to reveal words
      const sensitivity = 400;
      targetProgress = Math.max(0, Math.min(1, targetProgress + e.deltaY / sensitivity));
    };

    // Use scroll event on touch devices to match normal momentum scroll
    const onScroll = () => {
      const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (maxScroll > 0) {
        targetProgress = scrollEl.scrollTop / maxScroll;
      }
    };

    if (isTouch) {
      scrollEl.addEventListener('scroll', onScroll, { passive: true });
    } else {
      scrollEl.addEventListener('wheel', onWheel as EventListener, { passive: false });
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      if (isTouch) {
        scrollEl.removeEventListener('scroll', onScroll);
      } else {
        scrollEl.removeEventListener('wheel', onWheel as EventListener);
      }
      cancelAnimationFrame(rafId);
    };
  }, [revealInitialWords, enableBlur, baseOpacity, blurStrength, baseY]);

  return (
    <h2 ref={containerRef} className={`react-scroll-reveal ${containerClassName}`}>
      <p className={`react-scroll-reveal-text ${textClassName}`}>
        {words.map(({ part, index, isSpace, wordIndex }: { part: string, index: number, isSpace: boolean, wordIndex: number }) => {
          if (isSpace) return part;
          if (wordIndex < revealInitialWords) {
            return (
              <span className="word word--visible" key={index}>
                {part}
              </span>
            );
          }
          return (
            <span className="word word--animated" key={index}>
              {part}
            </span>
          );
        })}
      </p>
    </h2>
  );
};

export default ScrollReveal;
