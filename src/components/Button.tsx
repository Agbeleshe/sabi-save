import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text" | "secondary" | "nutral";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none";

  const variantClasses = {
    primary: "bg-primary text-dark hover:bg-opacity-90 shadow-md",
    nutral: "bg-white text-dark hover:bg-opacity-90 shadow-md",
    secondary:
      "bg-black text-white hover:bg-opacity-90 shadow-md border border-white",
    outline:
      "border-2 border-primary text-dark hover:bg-primary hover:text-dark",
    text: "text-primary hover:text-dark",
  };

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
