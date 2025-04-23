import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'light' | 'dark' | 'primary';
}

function Section({ id, className = '', children, background = 'light' }: SectionProps) {
  const backgroundClasses = {
    light: 'bg-light text-dark',
    dark: 'bg-dark text-light',
    primary: 'bg-primary text-dark',
  };

  return (
    <section 
      id={id} 
      className={`py-16 sm:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default Section;