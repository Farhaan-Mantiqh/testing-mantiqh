"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const DEFAULT_COLORS = ["#171925", "#105AA0"]
const BAND_HALF = 17
const SWEEP_START = -BAND_HALF
const SWEEP_END = 100 + BAND_HALF

const sweepEase = (t: number) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2

function buildGradient(pos: number, colors: string[], textColor: string) {
  const bandStart = pos - BAND_HALF
  const bandEnd = pos + BAND_HALF

  if (bandStart >= 100) {
    return `linear-gradient(90deg, ${textColor}, ${textColor})`
  }
  const n = colors.length
  const parts: string[] = []

  if (bandStart > 0)
    parts.push(`${textColor} 0%`, `${textColor} ${bandStart.toFixed(2)}%`)

  colors.forEach((c, i) => {
    const pct = n === 1 ? pos : bandStart + (i / (n - 1)) * BAND_HALF * 2
    parts.push(`${c} ${pct.toFixed(2)}%`)
  })

  if (bandEnd < 100)
    parts.push(`transparent ${bandEnd.toFixed(2)}%`, `transparent 100%`)

  return `linear-gradient(90deg, ${parts.join(", ")})`
}

function measureWidths(el: HTMLElement, texts: string[]) {
  const ghost = el.cloneNode() as HTMLElement
  Object.assign(ghost.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    width: "auto",
    whiteSpace: "nowrap",
  })
  el.parentElement!.appendChild(ghost)
  const widths = texts.map((t) => {
    ghost.textContent = t
    return ghost.getBoundingClientRect().width
  })
  ghost.remove()
  return widths
}

export interface TextrProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  text: string | string[]
  colors?: string[]
  textColor?: string
  duration?: number
  delay?: number
  repeat?: boolean
  repeatDelay?: number
  startOnView?: boolean
  once?: boolean
  fixedWidth?: boolean
  wrap?: boolean
}

export function Textr({
  text,
  colors = DEFAULT_COLORS,
  textColor = "#ffffff",
  duration = 1.5,
  delay = 0,
  repeat = false,
  repeatDelay = 0.5,
  startOnView = true,
  once = true,
  className,
  fixedWidth = false,
  wrap = false,
  ...props
}: TextrProps) {
  const texts = Array.isArray(text) ? text : [text]
  const isMulti = texts.length > 1

  const spanRef = useRef<HTMLSpanElement>(null)

  const optsRef = useRef({ colors, textColor, duration, delay, repeat, repeatDelay, texts })
  optsRef.current = { colors, textColor, duration, delay, repeat, repeatDelay, texts }

  const indexRef = useRef(0)
  const hasPlayedRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const playRef = useRef<() => void>(() => { })
  const stopRef = useRef<() => void>(() => { })
  const animRef = useRef<gsap.core.Tween | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [measuredWidths, setMeasuredWidths] = useState<number[]>([])

  useEffect(() => {
    const el = spanRef.current
    if (!el || !isMulti) return
    setMeasuredWidths(measureWidths(el, texts))
  }, [Array.isArray(text) ? text.join("\0") : text, isMulti])

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    playRef.current = () => {
      const { duration, delay, texts, colors, textColor } = optsRef.current

      const proxy = { pos: SWEEP_START }
      el.style.backgroundImage = buildGradient(SWEEP_START, colors, textColor)

      animRef.current = gsap.to(proxy, {
        pos: SWEEP_END,
        duration,
        delay,
        ease: sweepEase,
        onUpdate: () => {
          el.style.backgroundImage = buildGradient(proxy.pos, colors, textColor)
        },
        onComplete: () => {
          if (!optsRef.current.repeat) return
          timerRef.current = setTimeout(() => {
            const next = (indexRef.current + 1) % texts.length
            indexRef.current = next
            setActiveIndex(next)
            playRef.current()
          }, optsRef.current.repeatDelay * 1000)
        }
      })
    }

    stopRef.current = () => {
      animRef.current?.kill()
      clearTimeout(timerRef.current)
    }

    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      el.style.backgroundImage = buildGradient(SWEEP_END, optsRef.current.colors, optsRef.current.textColor)
      return
    }

    if (startOnView) {
      ScrollTrigger.create({
        trigger: el,
        once: once,
        start: "top 90%",
        onEnter: () => {
          if (once && hasPlayedRef.current) return
          hasPlayedRef.current = true
          playRef.current()
        },
        onEnterBack: () => {
          if (!once) playRef.current()
        }
      })
    } else {
      if (!hasPlayedRef.current || !once) {
        hasPlayedRef.current = true
        playRef.current()
      }
    }

    return () => {
      stopRef.current?.()
      ScrollTrigger.getAll().forEach(t => t.trigger === el && t.kill())
    }
  }, [startOnView, once])

  const fixedW =
    isMulti && fixedWidth && !wrap && measuredWidths.length > 0
      ? Math.max(...measuredWidths)
      : undefined

  const animatedW =
    isMulti && !fixedWidth && !wrap && measuredWidths[activeIndex] != null
      ? measuredWidths[activeIndex]
      : undefined

  const lastAnimatedW = useRef(animatedW)
  useEffect(() => {
    if (animatedW != null && spanRef.current && lastAnimatedW.current !== animatedW) {
      gsap.to(spanRef.current, {
        width: animatedW,
        duration: 0.4,
        ease: "power2.out"
      })
      lastAnimatedW.current = animatedW
    }
  }, [animatedW])

  return (
    <span
      ref={spanRef}
      className={`align-bottom leading-[100%] text-inherit ${className || ""}`.trim()}
      style={{
        transform: "translateY(-2px)",
        color: "transparent",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "100% 100%",
        backgroundImage: `linear-gradient(90deg, transparent, transparent)`,
        ...(isMulti && !wrap && {
          display: "inline-block",
          overflow: "hidden",
          whiteSpace: "nowrap",
          verticalAlign: "bottom",
          ...(fixedW != null && { width: fixedW }),
          ...(animatedW != null && lastAnimatedW.current == null && { width: animatedW }),
        }),
        ...(wrap && {
          display: "inline-block",
          whiteSpace: "normal",
          verticalAlign: "bottom",
        })
      }}
      {...props}
    >
      {texts[activeIndex]}
    </span>
  )
}
