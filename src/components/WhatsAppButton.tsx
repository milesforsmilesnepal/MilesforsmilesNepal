import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/9779800000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#20ba5a] active:scale-95 cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
};
