import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
     <div className="relative font-[Fontspring] inline-flex flex-wrap items-center justify-center gap-x-6 overflow-visible">

        {/* Title */}
        <span className="relative z-0  p-0 left-3 text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </span>

        {/* Highlighted Part */}
        {highlight && (
         <span
         className="relative pl-[20px] z-10 bg-gradient-to-r  right-4 from-[#F14472] via-[#AB64F2] to-[#F24C26] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {highlight}
       </span>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
