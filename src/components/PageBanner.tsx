// components/PageBanner.tsx
import React, { ReactNode } from "react";
import MotionAnimation from "../motion/MotionAnimation";
import CircleAnimation from "../HOC/CircleAnimation";
import { useLocation } from "react-router-dom";

interface PageBannerProps {
  /** The main heading text */
  title: string;
  /** Optional subheading text */
  subtitle?: string;
  /** Optional background image URL */
  backgroundImage?: string;
  /** Text alignment (center, left, right) */
  alignment?: "center" | "left" | "right";
  /** Optional additional content */
  children?: ReactNode;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Reusable banner component for page headers
 */
const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  alignment = "center",
  children,
  className = "",
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`relative overflow-hidden py-24 px-6 ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: backgroundImage ? "overlay" : undefined,
      }}
    >
      {/* Overlay for better text readability on background images */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-${alignment} text-white`}>
          <MotionAnimation motion="slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
              {title}
              {pathname === "/about" && (
                <CircleAnimation
                  delay={1000}
                  className="absolute top-[-180%] md:top-[-170%] right-[5%] md:right-[25%] h-[180px] md:h-[200px] w-[200px] md:w-[230px]"
                />
              )}
            </h1>
          </MotionAnimation>
          {subtitle && (
            <MotionAnimation delay={0.3} motion="slide-up">
              <p className="text-xl text-white/90 mt-6 max-w-xl mx-auto">
                {subtitle}
              </p>
            </MotionAnimation>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
