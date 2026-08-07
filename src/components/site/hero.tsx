import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import { HeroDashboard } from "@/components/site/hero-dashboard";
import { Eyebrow, Item, Stagger } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "300+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "25+", label: "Team Members" },
  { value: "10+", label: "Years Experience" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="section-shell">
        <Stagger className="flex flex-col gap-6">
          <Item className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 border-b border-border/70 pb-5">
            <Eyebrow>Digital Marketing Agency in India Since 2015</Eyebrow>
            <span className="kicker hidden sm:inline">Tamil Nadu · India</span>
          </Item>

          <Item>
            <h1 className="text-balance text-[2.3rem] uppercase leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Grow Your Business <span className="text-gradient">Faster</span> with{" "}
              <span className="text-gradient">AI-Powered</span> Digital Marketing
            </h1>
          </Item>
        </Stagger>

        <div className="mt-10 grid gap-10 border-t border-border/70 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <Stagger className="flex min-w-0 flex-col gap-7">
            <Item>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">
                Smart Marketing System helps small and medium businesses grow with AI-powered
                digital marketing, lead generation, website &amp; app designing and automation.
              </p>
            </Item>

            <Item>
              <a
                href="#about"
                className="gold-underline inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Read More
                <ArrowUpRight className="size-4" />
              </a>
            </Item>

            <Item className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <TrendingUp className="size-4" />
                  Start Your Growth
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="#services">View Services</a>
              </Button>
            </Item>
          </Stagger>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="min-w-0"
          >
            <HeroDashboard />
          </motion.div>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 border-t border-border/70 sm:grid-cols-4">
          {stats.map((s) => (
            <Item
              key={s.label}
              className="min-w-0 border-b border-border/70 px-1 py-5 sm:border-b-0 sm:border-r sm:border-border/70 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <p className="font-display text-3xl leading-none tracking-tight md:text-4xl">
                <span className="text-gradient">{s.value}</span>
              </p>
              <p className="kicker mt-2 block">{s.label}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
