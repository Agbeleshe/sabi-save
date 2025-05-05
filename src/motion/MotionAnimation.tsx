import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Props for the MotionAnimation component
 *
 * @interface MotionAnimationProps
 * @property {number} [delay=0.1] - Delay before animation starts (in seconds)
 * @property {string} [motion='slide-right'] - Animation type (slide-right, slide-left, slide-up, slide-down, fade-in, zoom-in, rotate, bounce)
 * @property {number} [duration=0.6] - Animation duration (in seconds)
 * @property {boolean} [once=false] - Whether the animation should only play once
 * @property {number} [distance=50] - Distance to travel for slide animations (in pixels)
 * @property {number} [threshold=0.1] - Intersection observer threshold (0 to 1)
 * @property {string} [easing='cubic-bezier(0.25, 0.1, 0.25, 1.0)'] - CSS easing function
 * @property {ReactNode} children - Child components
 */
interface MotionAnimationProps {
  delay?: number;
  motion?: string;
  duration?: number;
  once?: boolean;
  distance?: number;
  threshold?: number;
  easing?: string;
  children: ReactNode;
}

/**
 * A Higher Order Component for adding animations to React components
 *
 * @param props - Component props
 * @returns The animated component
 */
const MotionAnimation = ({
  delay = 0.1,
  motion = "slide-right",
  duration = 0.6,
  once = false,
  distance = 50,
  threshold = 0.1,
  easing = "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
  children,
}: MotionAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const shouldAnimate = !once || !hasAnimated;

    if (!shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, hasAnimated, threshold]);

  // Define initial and animated styles based on motion type
  const getStyles = () => {
    const baseStyles: React.CSSProperties = {
      opacity: 0,
      transform: "none",
      transition: `all ${duration}s ${easing} ${delay}s`,
    };

    const animatedStyles: React.CSSProperties = {
      opacity: 1,
      transform: "none",
      transition: `all ${duration}s ${easing} ${delay}s`,
    };

    switch (motion) {
      case "slide-right":
        baseStyles.transform = `translateX(-${distance}px)`;
        break;
      case "slide-left":
        baseStyles.transform = `translateX(${distance}px)`;
        break;
      case "slide-up":
        baseStyles.transform = `translateY(${distance}px)`;
        break;
      case "slide-down":
        baseStyles.transform = `translateY(-${distance}px)`;
        break;
      case "zoom-in":
        baseStyles.transform = "scale(0.5)";
        break;
      case "zoom-out":
        baseStyles.transform = "scale(1.5)";
        break;
      case "rotate":
        baseStyles.transform = "rotate(-180deg)";
        break;
      case "bounce":
        baseStyles.transform = "scale(0.8)";
        animatedStyles.transform = "scale(1)";
        animatedStyles.transition = `all ${duration}s cubic-bezier(0.36, 0.07, 0.19, 1.44) ${delay}s`;
        break;
      case "fade-in":
        // Only opacity changes, which is already handled in the base styles
        break;
      default:
        // Default to fade-in if unknown motion type
        console.warn(`Unknown motion type: ${motion}. Defaulting to fade-in.`);
    }

    return isVisible ? animatedStyles : baseStyles;
  };

  const style = getStyles();

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};

export default MotionAnimation;
