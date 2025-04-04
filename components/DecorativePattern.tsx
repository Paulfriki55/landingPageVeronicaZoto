"use client"


import type React from "react"
interface DecorativePatternProps {
  type: "dots" | "lines" | "waves"
  top?: string
  bottom?: string
  left?: string
  right?: string
  width?: string
  height?: string
  opacity?: number
  color?: string
  className?: string
  rotate?: number
}

export default function DecorativePattern({
  type,
  top,
  bottom,
  left,
  right,
  width = "200px",
  height = "200px",
  opacity = 0.1,
  color = "var(--primary-light)",
  className = "",
  rotate = 0,
}: DecorativePatternProps) {
  let patternClass = ""

  switch (type) {
    case "dots":
      patternClass = "dot-pattern"
      break
    case "lines":
      patternClass = "line-pattern"
      break
    case "waves":
      patternClass = "wave-effect"
      break
  }

  return (
    <div
      className={`absolute ${patternClass} ${className}`}
      style={
        {
          top,
          bottom,
          left,
          right,
          width,
          height,
          opacity,
          backgroundColor: type === "waves" ? "transparent" : undefined,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
          "--primary-light": color,
        } as React.CSSProperties
      }
    />
  )
}

