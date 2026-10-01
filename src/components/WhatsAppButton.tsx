import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/9779840569920"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 pointer-events-none" />
      <span className="absolute right-16 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900/90 text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-lg -translate-x-1 group-hover:translate-x-0 hidden sm:block">
        Chat with us on WhatsApp
      </span>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
};
