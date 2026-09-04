"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import type Lenis from "lenis"

export default function SiteLoader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Skip loader on non-homepage or if disabled
    if (
      typeof window === "undefined" ||
      window.location.pathname !== "/" ||
      import.meta.env.PUBLIC_DISABLE_LOADER === "true"
    ) {
      const container = containerRef.current
      if (container) {
        container.style.display = "none"
      }
      return
    }

    const container = containerRef.current
    if (!container) return

    const lenis = window.lenis as unknown as Lenis | undefined

    // Block scroll when loader mounts/starts
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    if (lenis) {
      lenis.stop()
    }

    // Remove the static HTML overlay now that React has taken over
    const staticOverlay = document.getElementById("static-loader-overlay")
    if (staticOverlay) {
      staticOverlay.style.display = "none"
    }

    const ctx = gsap.context(() => {
      gsap.set(columnsRef.current, { y: 0 })
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8 })

      const tl = gsap.timeline({
        onComplete: () => {
          container.style.display = "none"
          // Re-enable scroll when loader completes
          document.documentElement.style.overflow = ""
          document.body.style.overflow = ""
          if (lenis) {
            lenis.start()
          }
        }
      })

      // Logo show
      tl.to(logoRef.current, {
        opacity: 1, scale: 1, duration: 1.2, ease: "power3.out"
      })

      // Delay
      tl.to({}, { duration: 0.5 })

      // Logo hide
      tl.to(logoRef.current, {
        opacity: 0, scale: 1.1, duration: 0.8, ease: "power3.in"
      })

      // Columns exit
      tl.to(columnsRef.current, {
        y: "-100%", duration: 1.2, stagger: 0.15, ease: "expo.inOut"
      }, "-=0.4")
    }, container)

    return () => {
      ctx.revert()
      // Clean up overflow styles in case of navigation/unmount
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      if (lenis) {
        lenis.start()
      }
    }
  }, [])


  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
      {/* Columns */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            ref={(el) => { columnsRef.current[i] = el }}
            className="flex-1 h-full bg-[#171925]"
          />
        ))}
      </div>

      {/* Logo */}
      <div ref={logoRef} className="relative z-10 flex items-center justify-center">
        <svg width="40" height="28" viewBox="0 0 50 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12.0839L24.6713 25.1748V32.2238L6.29371 22.4056V36L0 32.4755V12.0839Z" fill="#387EC1" />
          <path d="M49.0908 12.0839L24.4195 25.1748V32.2238L42.7971 22.4056V36L49.0908 32.4755V12.0839Z" fill="#4EAEF9" />
          <path d="M3.52441 9.56643L21.6503 0V7.8042L16.3636 10.3217L21.6503 13.3427V20.3916L3.52441 9.56643Z" fill="#387EC1" />
          <path d="M45.5664 9.56643L27.4405 0V7.8042L32.7272 10.3217L27.4405 13.3427V20.3916L45.5664 9.56643Z" fill="#4EAEF9" />
        </svg>
      </div>
    </div>
  )
}
