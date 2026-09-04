"use client";

import { cn } from "../../lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  vx: number;
  vy: number;
}

interface StarBackgroundProps {
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const numStars = 80;

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;

        return {
          x: Math.random() * width,
          y: Math.random() * height,

          // Small stars
          radius: Math.random() * 1 + 0.5,

          opacity: Math.random() * 0.5 + 0.5,

          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,

          // Slight horizontal drift
          vx: (Math.random() - 0.5) * 0.06,

          // Faster upward movement
          vy: -(Math.random() * 0.35 + 0.15),
        };
      });
    },
    [
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const { width, height } = canvas.getBoundingClientRect();

      canvas.width = width;
      canvas.height = height;

      setStars(generateStars(width, height));
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Move stars
        star.x += star.vx;
        star.y += star.vy;

        // Reappear at bottom
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }

        // Horizontal wrapping
        if (star.x < -10) {
          star.x = canvas.width + 10;
        }

        if (star.x > canvas.width + 10) {
          star.x = -10;
        }

        // Twinkle
        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(
              Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5
            );
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
    />
  );
};