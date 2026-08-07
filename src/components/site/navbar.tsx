import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useState } from "react";

import markTech from "@/assets/smart-mark.png";
import { useTheme } from "@/components/theme-provider";
import { QUOTES_LINK } from "@/lib/site-links";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-border/70 py-2"
            : "border-b border-transparent py-4",
        )}
      >
        <nav
          aria-label="Main navigation"
          className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between"
        >
          <a href="/#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <motion.span
              whileHover={{ rotate: 6, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="glass-panel glow-pulse relative flex size-10 shrink-0 items-center justify-center p-1 sm:size-11 sm:p-1.5"
            >
              <img
                src={markTech}
                alt="SMART — AI Driven Marketing Solutions logo"
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </motion.span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate font-display text-sm uppercase tracking-tight sm:text-base">
                <span className="text-gradient">SMART</span>
              </span>
              <span className="kicker mt-0.5 block truncate text-[0.5rem] sm:text-[0.56rem]">
                AI Driven Marketing Solutions
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="gold-underline relative block px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="soft"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                </motion.span>
              </AnimatePresence>
            </Button>

            <Button variant="glass" size="lg" asChild className="hidden md:inline-flex">
              <a
                href={QUOTES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instant Quote Portal"
              >
                Get Quote
              </a>
            </Button>

            <Button variant="hero" size="lg" asChild className="hidden sm:inline-flex">
              <a href="/#contact">
                <Sparkles className="size-4" />
                Book Consultation
              </a>
            </Button>

            <Button
              variant="soft"
              size="icon"
              className="lg:hidden"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="section-shell lg:hidden"
          >
            <div className="glass mt-3 rounded-3xl p-4">
              <ul className="flex flex-col">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button variant="hero" size="lg" asChild className="mt-3 w-full">
                <a href="/#contact" onClick={() => setOpen(false)}>
                  Book Consultation
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild className="mt-2 w-full">
                <a
                  href={QUOTES_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
