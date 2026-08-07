import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { Item, Stagger } from "@/components/site/motion-primitives";
import { socialLinks } from "@/lib/site-links";

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-3.65 19.31c-.09-.73-.17-1.86.04-2.66.19-.72 1.2-4.6 1.2-4.6s-.3-.61-.3-1.51c0-1.42.82-2.48 1.85-2.48.87 0 1.29.65 1.29 1.44 0 .87-.56 2.18-.85 3.4-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.7 0-2.46-1.77-4.18-4.29-4.18-2.92 0-4.64 2.19-4.64 4.45 0 .88.34 1.83.76 2.35.08.1.1.19.07.29-.08.32-.25.99-.28 1.12-.05.19-.25.26-.43.17-1.19-.55-1.93-2.28-1.93-3.67 0-2.99 2.17-5.73 6.26-5.73 3.29 0 5.84 2.34 5.84 5.48 0 3.27-2.06 5.9-4.92 5.9-.96 0-1.87-.5-2.18-1.09 0 0-.48 1.83-.6 2.28-.2.75-.72 1.68-1.09 2.26A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.2 2c-3 0-5.2 1-6.6 3C4.3 6.7 3.8 9 3.8 11.9v.2c0 2.9.5 5.2 1.8 7 1.4 1.9 3.6 2.9 6.6 2.9 2.3 0 4.1-.6 5.4-1.7 1.3-1.1 2-2.6 2-4.2 0-1.9-.9-3.4-2.5-4.2-.2-1.1-.7-2-1.5-2.6-.9-.7-2-1.1-3.4-1.1-1.9 0-3.4.7-4.2 2l1.6 1.1c.5-.8 1.3-1.2 2.5-1.2 1.4 0 2.3.6 2.6 1.7-.7-.1-1.4-.2-2.1-.2-1.5 0-2.7.4-3.5 1.1-.8.7-1.2 1.6-1.2 2.7 0 1 .4 1.9 1.1 2.5.7.6 1.7 1 2.8 1 1.5 0 2.7-.6 3.4-1.7.4-.6.6-1.3.7-2.1.7.5 1.1 1.3 1.1 2.3 0 1-.5 2-1.4 2.7-.9.7-2.2 1.2-4 1.2-2.4 0-4-.7-5-2.1-1-1.4-1.4-3.3-1.4-5.8v-.2c0-2.5.5-4.4 1.4-5.8 1-1.4 2.6-2.1 5-2.1 2.3 0 3.9.7 4.9 2 .5.6.8 1.4 1 2.3l2-.5c-.3-1.2-.8-2.3-1.5-3.2C16.9 2.7 14.8 2 12.2 2Zm.4 10.9c.7 0 1.4.1 2 .2-.1 1-.4 1.7-.8 2.2-.4.5-1 .7-1.7.7-.6 0-1-.1-1.3-.4-.3-.2-.5-.6-.5-1s.2-.8.6-1c.4-.5 1-.7 1.7-.7Z" />
    </svg>
  );
}

const icons = {
  facebook: Facebook,
  x: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  pinterest: PinterestIcon,
  threads: ThreadsIcon,
  youtube: Youtube,
  whatsapp: MessageCircle,
} as const;

export function ContactCards({ className = "flex flex-col gap-4" }: { className?: string }) {
  return (
    <Stagger className={className} gap={0.12}>
      <Item>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="glass gradient-ring flex items-start gap-4 rounded-sm p-6"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
            <Phone className="size-5" />
          </span>
          <div>
            <p className="text-base font-bold">Phone</p>
            <a
              href="tel:+919677967950"
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              +91 96779 67950
            </a>
            <a
              href="tel:+919003321907"
              className="block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              +91 90033 21907
            </a>
          </div>
        </motion.div>
      </Item>

      <Item>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="glass gradient-ring flex items-start gap-4 rounded-sm p-6"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
            <Mail className="size-5" />
          </span>
          <div>
            <p className="text-base font-bold">Email</p>
            <a
              href="mailto:smsin360@gmail.com"
              className="mt-1 block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              smsin360@gmail.com
            </a>
            <a
              href="mailto:vino@smsin360.com"
              className="block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              vino@smsin360.com
            </a>
          </div>
        </motion.div>
      </Item>

      <Item>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="glass gradient-ring flex items-start gap-4 rounded-sm p-6"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
            <MapPin className="size-5" />
          </span>
          <div className="text-sm">
            <p className="text-base font-bold">Address</p>
            <address className="mt-3 not-italic leading-relaxed">
              <span className="block font-semibold text-primary">Corporate Office:</span>
              <span className="block text-foreground/90">
                No. 25/1, Balakrishnan Nagar, Mannargudi, Tiruvarur, Tamil Nadu – 614001
              </span>
              <span className="block text-xs font-semibold text-success">GST: 33ASMPV3419Q1ZY</span>
            </address>
            <address className="mt-4 not-italic leading-relaxed">
              <span className="block font-semibold text-primary">Chennai:</span>
              <span className="block text-foreground/90">
                No.12, 3, New St, Elango Nagar, Menambedu, Ambattur, Chennai – 600053
              </span>
            </address>
          </div>
        </motion.div>
      </Item>
    </Stagger>
  );
}

export function FollowUs({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Follow Us</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((s) => {
          const Icon = icons[s.key as keyof typeof icons];
          return (
            <a
              key={s.key}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-11 cursor-pointer items-center justify-center rounded-sm border border-border/70 bg-card/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
