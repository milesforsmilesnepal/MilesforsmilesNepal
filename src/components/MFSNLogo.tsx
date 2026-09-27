import React from 'react';

export const MFSN_BRAND_COLOR = '#16A396';
export const MFSN_BRAND_DARK = '#0E786E';
export const MFSN_BRAND_LIGHT = '#38C8BA';
export const MFSN_BRAND_BG_TINT = '#F0FDFA';
export const MFSN_LOGO_IMAGE = '/mfsn_logo.jpg';

interface MFSNLogoProps {
  variant?: 'badge' | 'horizontal' | 'mark' | 'full';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const MFSNLogo: React.FC<MFSNLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  // Size mapping
  const badgeSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-24 h-24 rounded-3xl',
  };

  const imgSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24',
  };

  if (variant === 'badge' || variant === 'mark') {
    return (
      <div
        className={`relative overflow-hidden shadow-xs flex items-center justify-center bg-[#16A396] ${badgeSizes[size]} ${className}`}
        title="Miles for Smiles Nepal (MFSN)"
      >
        <img
          src={MFSN_LOGO_IMAGE}
          alt="MFSN Logo"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback SVG if image not loaded
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
        {/* Crisp vector fallback / overlay */}
        <span className="sr-only">MFSN</span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl shadow-md border border-[#16A396]/20 bg-[#16A396] text-white p-5 flex flex-col items-center justify-center text-center ${className}`}
      >
        <img
          src={MFSN_LOGO_IMAGE}
          alt="Miles for Smiles Nepal (MFSN) Official Logo"
          className="w-full max-w-[280px] h-auto object-contain rounded-xl"
        />
      </div>
    );
  }

  // Horizontal lockup (used in Header, Footers, Modals)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Icon Badge */}
      <div
        className={`relative overflow-hidden rounded-xl shadow-xs shrink-0 bg-[#16A396] border border-white/20 ${badgeSizes[size]}`}
      >
        <img
          src={MFSN_LOGO_IMAGE}
          alt="Miles for Smiles Nepal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-[#16A396] transition-colors">
            Miles for Smiles
          </span>
          <span className="text-xs font-extrabold text-[#16A396] tracking-wider uppercase bg-[#16A396]/10 px-1.5 py-0.5 rounded-sm">
            MFSN
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-xs font-semibold text-slate-500 font-nepali">
            मुस्कानको लागि पाइला नेपाल
          </span>
          {showTagline && (
            <>
              <span className="text-slate-300 text-[10px]">·</span>
              <span className="text-[11px] font-medium text-[#16A396] hidden sm:inline">
                Reaching the Unreached
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
