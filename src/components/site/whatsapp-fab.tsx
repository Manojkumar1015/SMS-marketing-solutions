import { MessageCircle } from "lucide-react";

import { WHATSAPP_LINK } from "@/lib/site-links";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Smart Marketing System on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-13 items-center justify-center rounded-sm border border-primary/50 bg-gradient-brand text-brand-foreground shadow-lg transition-transform duration-300 hover:-translate-y-1 md:size-14"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
