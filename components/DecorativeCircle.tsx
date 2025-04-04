interface DecorativeCircleProps {
    size: string
    top?: string
    bottom?: string
    left?: string
    right?: string
    color?: string
    opacity?: number
    className?: string
    animate?: boolean
    animationType?: "float" | "pulse" | "rotate"
    delay?: number
  }
  
  export default function DecorativeCircle({
    size,
    top,
    bottom,
    left,
    right,
    color = "var(--primary-light)",
    opacity = 0.15,
    className = "",
    animate = false,
    animationType = "float",
    delay = 0,
  }: DecorativeCircleProps) {
    let animationClass = ""
  
    if (animate) {
      switch (animationType) {
        case "float":
          animationClass = "animate-float"
          break
        case "pulse":
          animationClass = "animate-pulse-slow"
          break
        case "rotate":
          animationClass = "animate-rotate"
          break
      }
    }
  
    return (
      <div
        className={`absolute rounded-full ${animationClass} ${className}`}
        style={{
          width: size,
          height: size,
          top,
          bottom,
          left,
          right,
          backgroundColor: color,
          opacity,
          animationDelay: delay ? `${delay}ms` : undefined,
        }}
      />
    )
  }
  
  