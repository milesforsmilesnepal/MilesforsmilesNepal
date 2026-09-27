import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';
  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <div className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1AAE9F] dark:text-[#2dd4bf]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
