// components/PageBanner.tsx
import React, { ReactNode } from "react";

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
  return (
    <div
      className={`relative overflow-hidden py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-700 ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlend: backgroundImage ? "overlay" : undefined,
      }}
    >
      {/* Overlay for better text readability on background images */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto relative z-10">
        <div className={`max-w-3xl mx-auto text-${alignment} text-white`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-white/90 mt-4 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
