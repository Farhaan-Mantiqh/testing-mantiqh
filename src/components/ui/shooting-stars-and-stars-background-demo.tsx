"use client";

import React from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <>
      <StarsBackground className="absolute inset-0 z-0 pointer-events-none" />
      <ShootingStars className="absolute inset-0 z-0 pointer-events-none" />
    </>
  );
}