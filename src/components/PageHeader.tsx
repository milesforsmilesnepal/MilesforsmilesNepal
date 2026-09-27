import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  devanagariTitle?: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumb?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  devanagariTitle,
  subtitle,
  bgImage,
  breadcrumb,
  children,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f7069] via-[#148f84] to-[#073936] pt-32 pb-20 md:pt-40 md:pb-28">
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f7069]/90 to-[#073936]/90" />
        </div>
      )}

      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="container-app relative z-10">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-teal-200">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
                {item.to ? (
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {devanagariTitle && (
          <div className="font-devanagari text-lg sm:text-xl font-semibold text-[#F4C542] mb-2 tracking-wide">
            {devanagariTitle}
          </div>
        )}

        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-200">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  );
};
