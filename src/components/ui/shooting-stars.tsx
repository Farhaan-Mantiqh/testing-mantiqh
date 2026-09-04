"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  progress: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  return {
    x: Math.random() * window.innerWidth,
    y: -50,
    angle: 120 + Math.random() * 30,
  };
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 8,
  maxSpeed = 16,
  minDelay = 2500,
  maxDelay = 5000,
  starWidth = 140,
  starHeight = 2,
  className,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let timeoutId: number;

    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();

      setStar({
        id: Date.now(),
        x,
        y,
        angle,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        progress: 0,
      });

      const randomDelay =
        Math.random() * (maxDelay - minDelay) + minDelay;

      timeoutId = window.setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setStar((prevStar) => {
        if (!prevStar) return null;

        const newX =
          prevStar.x +
          prevStar.speed *
            Math.cos((prevStar.angle * Math.PI) / 180);

        const newY =
          prevStar.y +
          prevStar.speed *
            Math.sin((prevStar.angle * Math.PI) / 180);

        if (
          newX < -300 ||
          newX > window.innerWidth + 300 ||
          newY < -300 ||
          newY > window.innerHeight + 300
        ) {
          return null;
        }

        return {
          ...prevStar,
          x: newX,
          y: newY,
          progress: Math.min(prevStar.progress + 0.025, 1),
        };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
    >
      <defs>
        <linearGradient
          id="shooting-star-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#FFFFFF"
            stopOpacity="0"
          />
          <stop
            offset="40%"
            stopColor="#FFFFFF"
            stopOpacity="0.9"
          />
          <stop
            offset="80%"
            stopColor="#FFFFFF"
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor="#FFFFFF"
            stopOpacity="1"
          />
        </linearGradient>

        <filter
          id="shooting-star-blur"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
      </defs>

      {star && (
        <g
          transform={`rotate(${star.angle}, ${star.x}, ${star.y})`}
        >
          {(() => {
            const tailLength =
              50 + star.progress * (starWidth - 50);

            return (
              <>
                {/* Stretching Tail */}
                <rect
                  x={star.x - tailLength}
                  y={star.y}
                  width={tailLength}
                  height={starHeight}
                  rx={starHeight}
                  fill="url(#shooting-star-gradient)"
                  filter="url(#shooting-star-blur)"
                />

             return (
  <>
    {/* Stretching Tail */}
    <rect
      x={star.x - tailLength}
      y={star.y}
      width={tailLength}
      height={starHeight}
      rx={starHeight}
      fill="url(#shooting-star-gradient)"
      filter="url(#shooting-star-blur)"
    />
  </>
);
              </>
            );
          })()}
        </g>
      )}
    </svg>
  );
};