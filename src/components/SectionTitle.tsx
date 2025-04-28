import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg opacity-80 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;
