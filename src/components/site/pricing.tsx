import { AnimatePresence, motion } from "motion/react";
import { Check, Crown, MessageCircle, Sparkles, Star, Zap } from "lucide-react";
import { useState } from "react";

import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";
import { WHATSAPP_CHAT_LINK } from "@/lib/site-links";
import { cn } from "@/lib/utils";

type Cycle = "monthly" | "quarterly" | "yearly";

const cycles: { id: Cycle; label: string; suffix: string }[] = [
  { id: "monthly", label: "Monthly", suffix: "/ monthly" },
  { id: "quarterly", label: "Quarterly", suffix: "/ quarterly" },
  { id: "yearly", label: "Yearly", suffix: "/ yearly" },
];

const plans = [
  {
    name: "Starter Plan",
    icon: Zap,
    tagline: "For small businesses and startups beginning their digital marketing journey",
    prices: { monthly: "₹6,000", quarterly: "₹16,000", yearly: "₹60,000" },
    features: [
      "10 Social Media Flyers/Month",
      "4 Short Videos(30Sec)/Month",
      "Facebook + Instagram + Google MyBusiness",
      "Meta Ads Management (Facebook & Instagram)",
      "Basic Social Media Optimisation",
      "Monthly Performance Report",
    ],
    highlighted: false,
  },
  {
    name: "Growth Plan",
    icon: Star,
    tagline: "For growing businesses that need multi-platform marketing and paid ads",
    prices: { monthly: "₹12,000", quarterly: "₹33,000", yearly: "₹1,20,000" },
    features: [
      "20 Social Media Flyers/Month",
      "8 Short Videos(30Sec)/Month",
      "Facebook + Instagram + Google MyBusiness + YouTube",
      "Plus 2 Additional Social Platforms",
      "Meta Ads + Google Ads Management",
      "Lead Tracking & Advanced Reporting",
      "Monthly Marketing Strategy",
      "Priority WhatsApp Support",
    ],
    highlighted: true,
  },
  {
    name: "Premium Plan",
    icon: Crown,
    tagline: "Full-service marketing for established businesses needing maximum visibility",
    prices: { monthly: "₹18,000", quarterly: "₹50,000", yearly: "₹2,00,000" },
    features: [
      "25 Flyers & 12 Videos(30Sec)/Month",
      "Facebook +Instagram +YouTube +LinkedIN + Google Business MyBusiness",
      "Plus 4 Additional Social Platforms",
      "Meta Ads + Google Ads + Other Platforms",
      "Free WhatsApp Business API Setup",
      "Detailed Analytics Dashboard",
      "Monthly Strategy Call with Marketing Expert",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const active = cycles.find((c) => c.id === cycle)!;

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="04"
          eyebrow="Pricing"
          title="Digital Marketing"
          highlight="Pricing Plans"
          description="Fixed monthly packages with clear deliverables. No hidden fees."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Billing cycle"
            className="flex w-full max-w-md rounded-sm border border-border/70 bg-card/60 p-1 backdrop-blur sm:w-auto"
          >
            {cycles.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cycle === c.id}
                onClick={() => setCycle(c.id)}
                className={cn(
                  "relative z-10 flex-1 rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 sm:px-7",
                  cycle === c.id
                    ? "text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {cycle === c.id ? (
                  <motion.span
                    layoutId="cycle-pill"
                    className="absolute inset-0 -z-10 rounded-sm bg-gradient-brand"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                ) : null}
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <Stagger className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Item key={p.name} className="min-w-0">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className={cn(
                  "gradient-ring lift sheen relative flex h-full min-w-0 flex-col glass-panel p-6 sm:p-7",
                  p.highlighted && "card-glow",
                )}
              >
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <span className="index-num">{`0${i + 1}`}</span>
                  {p.highlighted ? (
                    <span className="kicker flex shrink-0 items-center gap-1.5 bg-gradient-brand px-2.5 py-1 text-[0.58rem] text-brand-foreground">
                      <Sparkles className="size-3" />
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex min-w-0 items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="min-w-0 text-lg uppercase">{p.name}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>

                <div className="mt-6 border-t border-border/60 pt-5">
                  <div className="flex flex-wrap items-end gap-2">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={cycle + p.name}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.28 }}
                        className="font-display text-4xl leading-none text-gradient"
                      >
                        {p.prices[cycle]}
                      </motion.span>
                    </AnimatePresence>
                    <span className="pb-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {active.suffix}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">+18% GST applicable</p>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex min-w-0 items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
                        <Check className="size-3" />
                      </span>
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={p.highlighted ? "hero" : "glass"}
                  size="xl"
                  asChild
                  className="mt-8 w-full"
                >
                  <a
                    href={WHATSAPP_CHAT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp about the ${p.name}`}
                  >
                    <MessageCircle className="size-4" />
                    Subscribe Now
                  </a>
                </Button>
              </motion.article>
            </Item>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom package for your business?{" "}
          <a href="#contact" className="font-semibold text-primary hover:underline">
            Contact us
          </a>{" "}
          to discuss your specific marketing requirements.
        </p>
      </div>
    </section>
  );
}
