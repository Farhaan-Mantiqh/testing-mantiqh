"use client"

import React, { useEffect, useRef, memo } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationType = "text" | "word" | "words" | "character" | "characters" | "line" | "lines"
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "blurInLeft"
  | "blurInRight"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"

export interface TextfProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  text?: string
  children?: React.ReactNode
  /**
   * The class name to be applied to the component
   */
  className?: string
  /**
   * The class name to be applied to each segment
   */
  segmentClassName?: string
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The duration of the animation for each individual item
   */
  duration?: number
  /**
   * The element type to render
   */
  as?: React.ElementType
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean
  /**
   * Whether to animate only once
   */
  once?: boolean
  /**
   * The animation preset to use
   */
  animation?: AnimationVariant
  /**
   * Whether to enable accessibility features (default: true)
   */
  accessible?: boolean
  /**
   * Disables staggering between children
   */
  noStagger?: boolean
}

const getInitialState = (animation: AnimationVariant) => {
  switch (animation) {
    case "fadeIn": return { opacity: 0, y: 20 }
    case "blurIn": return { opacity: 0, filter: "blur(10px)" }
    case "blurInUp": return { opacity: 0, filter: "blur(10px)", y: 20 }
    case "blurInDown": return { opacity: 0, filter: "blur(10px)", y: -20 }
    case "blurInLeft": return { opacity: 0, filter: "blur(10px)", x: -20 }
    case "blurInRight": return { opacity: 0, filter: "blur(10px)", x: 20 }
    case "slideUp": return { opacity: 0, y: 20 }
    case "slideDown": return { opacity: 0, y: -20 }
    case "slideLeft": return { opacity: 0, x: 20 }
    case "slideRight": return { opacity: 0, x: -20 }
    case "scaleUp": return { opacity: 0, scale: 0.5 }
    case "scaleDown": return { opacity: 0, scale: 1.5 }
    default: return { opacity: 0 }
  }
}

const getFinalState = (animation: AnimationVariant) => {
  switch (animation) {
    case "fadeIn": return { opacity: 1, y: 0 }
    case "blurIn": return { opacity: 1, filter: "blur(0px)" }
    case "blurInUp": return { opacity: 1, filter: "blur(0px)", y: 0 }
    case "blurInDown": return { opacity: 1, filter: "blur(0px)", y: 0 }
    case "blurInLeft": return { opacity: 1, filter: "blur(0px)", x: 0 }
    case "blurInRight": return { opacity: 1, filter: "blur(0px)", x: 0 }
    case "slideUp": return { opacity: 1, y: 0 }
    case "slideDown": return { opacity: 1, y: 0 }
    case "slideLeft": return { opacity: 1, x: 0 }
    case "slideRight": return { opacity: 1, x: 0 }
    case "scaleUp": return { opacity: 1, scale: 1, ease: "back.out(1.7)" }
    case "scaleDown": return { opacity: 1, scale: 1, ease: "back.out(1.7)" }
    default: return { opacity: 1 }
  }
}

const TextfBase = ({
  text,
  children,
  delay = 0,
  duration = 0.3,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  accessible = true,
  noStagger = false,
  ...props
}: TextfProps) => {
  const containerRef = useRef<HTMLElement>(null)
  const segmentsRef = useRef<(HTMLElement | null)[]>([])

  let segmentsGrouped: string[][] = []

  const textString = text || (Array.isArray(children)
    ? children.join("")
    : typeof children === "string"
      ? children
      : String(children || ""))

  switch (by) {
    case "character":
    case "characters":
      segmentsGrouped = textString.split(/(\s+)/).map(word => {
        if (/^\s+$/.test(word)) return [word]
        return word.split("")
      })
      break
    case "word":
    case "words":
      segmentsGrouped = textString.split(/(\s+)/).map(w => [w])
      break
    case "line":
    case "lines":
      segmentsGrouped = textString.split("\n").map(l => [l])
      break
    case "text":
    default:
      segmentsGrouped = [[textString]]
      break
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = segmentsRef.current.filter(Boolean)
      if (elements.length === 0) return

      const initial = getInitialState(animation)
      const final = getFinalState(animation)

      gsap.set(elements, initial)

      const staggerTimings: Record<AnimationType, number> = {
        text: 0.06,
        word: 0.05,
        words: 0.05,
        character: 0.03,
        characters: 0.03,
        line: 0.06,
        lines: 0.06,
      }

      const staggerTime = noStagger ? 0 : staggerTimings[by]

      const playAnimation = () => {
        gsap.to(elements, {
          ...final,
          duration,
          delay,
          stagger: staggerTime,
          ease: final.ease || "power2.out",
          overwrite: "auto"
        })
      }

      if (startOnView) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 90%",
          once,
          onEnter: playAnimation,
          onEnterBack: once ? undefined : playAnimation,
          onLeave: once ? undefined : () => gsap.set(elements, initial),
          onLeaveBack: once ? undefined : () => gsap.set(elements, initial),
        })
      } else {
        playAnimation()
      }
    }, containerRef)

    return () => ctx.revert()
  }, [animation, by, delay, duration, noStagger, once, startOnView])

  const computedClassName = `whitespace-pre-wrap ${className || ""}`.trim()
  let globalIndex = 0

  return (
    <Component
      ref={containerRef}
      className={computedClassName}
      aria-label={accessible ? (text || children) : undefined}
      {...props}
    >
      {accessible && <span className="sr-only">{textString}</span>}
      {segmentsGrouped.map((group, groupIdx) => {
        const isSpace = group.length === 1 && /^\s+$/.test(group[0])

        if (isSpace) {
          return (
            <span key={`space-${groupIdx}`} className="whitespace-pre">
              {group[0]}
            </span>
          )
        }

        return (
          <span
            key={`group-${groupIdx}`}
            className={
              by === "line" || by === "lines"
                ? "block"
                : by === "text"
                  ? "inline-block"
                  : "inline-block whitespace-nowrap"
            }
            aria-hidden={accessible ? true : undefined}
          >
            {group.map((segment, _i) => {
              const currentIdx = globalIndex++
              return (
                <span
                  key={`segment-${currentIdx}`}
                  ref={(el) => { segmentsRef.current[currentIdx] = el }}
                  className={`${by === "line" || by === "lines" ? "block" : "inline-block"
                    } ${segmentClassName || ""}`.trim()}
                >
                  {segment}
                </span>
              )
            })}
          </span>
        )
      })}
    </Component>
  )
}

// Export the memoized version
export const Textf = memo(TextfBase)
