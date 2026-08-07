import { BadgeIndianRupee, Cpu, Headphones, Rocket, TrendingUp, Users } from "lucide-react";

import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";

const reasons = [
  {
    icon: Cpu,
    title: "AI Automation",
    copy: "Campaign optimisation, reporting and lead follow-ups run on autopilot around the clock.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    copy: "A named strategist, designer and media buyer who know your brand inside out.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    copy: "Creative and campaign turnarounds measured in days, never weeks.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    copy: "Transparent plans that scale with you — no lock-ins, no hidden retainers.",
  },
  {
    icon: TrendingUp,
    title: "Latest Marketing Trends",
    copy: "AEO, GEO, LLMO and short-form video adopted early, tested for your market.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    copy: "WhatsApp-first support with real humans and rapid escalation when it matters.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-smart" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="03"
          eyebrow="Why Choose Us"
          title="Built for brands that want"
          highlight="compounding growth"
          description="Six reasons clients stay with us for years instead of months."
        />

        <Stagger className="mt-12 grid border-t border-border/70 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Item
              key={r.title}
              className="group relative min-w-0 border-b border-border/70 px-0 py-8 transition-colors duration-300 md:px-7 md:odd:pl-0 lg:px-7 lg:[&:nth-child(3n+1)]:pl-0 md:[&:not(:nth-child(2n))]:border-r md:[&:not(:nth-child(2n))]:border-border/70 lg:[&:not(:nth-child(3n))]:border-r lg:[&:not(:nth-child(3n))]:border-border/70"
            >
              <span className="index-num">{`0${i + 1}`}</span>
              <span className="mt-4 flex size-11 items-center justify-center rounded-sm border border-border/70 bg-card text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-base uppercase sm:text-lg">{r.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {r.copy}
              </p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
