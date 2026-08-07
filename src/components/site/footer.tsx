import logoFull from "@/assets/smart-logo-full.png";
import { FollowUs } from "@/components/site/contact-info";

const links = [
  { label: "Vision", href: "/#about" },
  { label: "Mission", href: "/#about" },
  { label: "Values", href: "/#why-smart" },
  { label: "Our Team", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Terms of Service", href: "/#contact" },
  { label: "Refund Policy", href: "/#contact" },
  { label: "Privacy Policy", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="beam relative mt-10 border-t border-border/70 py-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a href="/#home" className="group flex min-w-0 flex-col items-start gap-3">
          <span className="glass-panel flex w-40 items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105 sm:w-48">
            <img
              src={logoFull}
              alt="SMART — AI Driven Marketing Solutions logo"
              loading="lazy"
              width={192}
              height={155}
              className="h-auto w-full object-contain"
            />
          </span>
          <span className="font-display text-sm uppercase tracking-tight">
            <span className="text-gradient">SMART</span>
          </span>
          <span className="kicker block text-[0.6rem]">AI Driven Marketing Solutions</span>
        </a>

        <nav aria-label="Footer" className="min-w-0">
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="gold-underline text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-col gap-4 lg:items-end">
          <FollowUs className="!items-start lg:!items-end [&>div]:justify-start lg:[&>div]:justify-end" />
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} Smart Marketing System
          </p>
        </div>
      </div>
    </footer>
  );
}
