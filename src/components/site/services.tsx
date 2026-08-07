import {
  ArrowUpRight,
  Bot,
  Camera,
  Globe,
  LayoutTemplate,
  Lightbulb,
  Megaphone,
  MessageCircle,
  MonitorPlay,
  Palette,
  PenLine,
  Phone,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Target,
  Tv,
  Users,
  Video,
  Youtube,
  BarChart3,
  Facebook,
  Linkedin,
  Mail,
  Settings,
} from "lucide-react";

import { Item, SectionHeading, Stagger } from "@/components/site/motion-primitives";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Creative Services",
    href: "/services/creative",
    tagline: "We design graphics, videos, and branding assets that communicate your value clearly.",
    cta: "Explore Creative Services",
    items: [
      { icon: Share2, label: "Social Media Posts & Flyers" },
      { icon: Video, label: "Reels & Short Video Production" },
      { icon: Camera, label: "Product Photography" },
      { icon: MonitorPlay, label: "Corporate Presentations Design" },
      { icon: Globe, label: "Website Design (UI/UX)" },
      { icon: LayoutTemplate, label: "Landing Pages & Event Creatives" },
      { icon: Smartphone, label: "Mobile App Interface Design" },
      { icon: Lightbulb, label: "Content Writing & Copywriting" },
      { icon: PenLine, label: "Logo Design & Brand Identity" },
    ],
  },
  {
    icon: Settings,
    title: "Marketing Management",
    href: "/services/marketing",
    tagline: "We manage your online presence so you can focus on running your business.",
    cta: "Explore Marketing Management",
    items: [
      { icon: Share2, label: "Social Media Account Management" },
      { icon: Search, label: "Search Engine Optimisation (SEO)" },
      { icon: Target, label: "AEO, GEO & SXO" },
      { icon: Sparkles, label: "Large Language Model Optimization (LLMO)" },
      { icon: ShoppingCart, label: "E-Commerce Store Management" },
      { icon: Users, label: "Influencer Marketing Coordination" },
      { icon: ShieldCheck, label: "Online Reputation Management" },
      { icon: Bot, label: "AI Chatbots & Workflow Automation" },
      { icon: BarChart3, label: "Performance Analytics & Reporting" },
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    href: "/services/advertising",
    tagline: "We run targeted ad campaigns to generate leads and drive sales for your business.",
    cta: "Explore Paid Advertising",
    items: [
      { icon: Facebook, label: "Facebook & Instagram Ads (Meta)" },
      { icon: Target, label: "Google Ads (Search & Display)" },
      { icon: Youtube, label: "YouTube Video Advertising" },
      { icon: Phone, label: "WhatsApp Business Marketing" },
      { icon: Linkedin, label: "LinkedIn & Other Platforms" },
      { icon: MessageCircle, label: "RCS & Voice Broadcasting" },
      { icon: Mail, label: "SMS & Email Marketing" },
      { icon: Store, label: "Marketplace Ads (Amazon, Flipkart)" },
      { icon: Tv, label: "OTT Ads (Hotstar, Amazon, In-App Ads)" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          index="02"
          eyebrow="Our Services"
          title="Digital Marketing"
          highlight="Services"
          description="We offer three core services: Creative Design, Marketing Management, and Paid Advertising."
        />

        <Stagger className="mt-12 flex flex-col">
          {services.map((s, i) => (
            <Item
              key={s.title}
              className="group border-t border-border/70 py-9 last:border-b last:border-border/70"
            >
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
                <div className="flex min-w-0 flex-col gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="index-num shrink-0">{`0${i + 1}`}</span>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-border/70 bg-card text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                      <s.icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="text-balance text-2xl uppercase leading-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {s.tagline}
                  </p>
                  <Button variant="glass" size="lg" asChild className="mt-1 w-full sm:w-auto">
                    <a href={"href" in s && s.href ? s.href : "#contact"}>
                      {s.cta}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>

                <ul className="grid min-w-0 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex min-w-0 items-start gap-2.5 border-b border-border/40 pb-2.5 text-sm text-foreground/85"
                    >
                      <item.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="min-w-0">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
