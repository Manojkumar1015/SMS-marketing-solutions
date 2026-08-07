import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Activity, Eye, Heart, Palette, TrendingUp, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const metrics = [
  { icon: Users, value: "4K", label: "Leads" },
  { icon: Heart, value: "588K", label: "Engagement" },
  { icon: Eye, value: "5.2M", label: "Impressions" },
];

const points = [0, 18, 26, 40, 34, 30, 46, 78];

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  const path = points.map((p, i) => `${(i / (points.length - 1)) * 100},${100 - p}`).join(" L ");

  return (
    <div ref={ref} className="relative" style={{ perspective: 1400 }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass noise relative overflow-hidden rounded-sm p-5 sm:p-6"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full blur-[70px]"
          style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 70%)" }}
        />

        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
              <Activity className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">Campaign Performance</p>
              <p className="text-[0.68rem] text-muted-foreground">Real-time marketing analytics</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-primary">
            <TrendingUp className="size-3.5" />
            +42.5%
          </span>
        </div>

        <div className="glass-strong relative mt-5 rounded-sm p-4">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-40 w-full">
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={`M 0,100 L ${path} L 100,100 Z`}
              fill="url(#areaFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
            <motion.path
              d={`M ${path}`}
              fill="none"
              stroke="var(--primary)"
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </svg>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.12 }}
              >
                <p className="flex items-center gap-1.5 font-display text-lg leading-none text-gradient">
                  <m.icon className="size-3.5 text-muted-foreground" />
                  {m.value}
                </p>
                <p className="mt-0.5 text-[0.68rem] text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="glass floaty absolute right-2 top-3 flex items-center gap-2 rounded-sm px-3 py-2"
      >
        <span className="flex size-7 items-center justify-center rounded-sm bg-success/15 text-primary">
          <TrendingUp className="size-3.5" />
        </span>
        <span className="text-[0.72rem] font-bold text-primary">+132%</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="glass floaty absolute -bottom-6 left-2 flex items-center gap-2.5 rounded-sm px-4 py-3 sm:-left-6"
      >
        <span className="flex size-8 items-center justify-center rounded-sm bg-gradient-brand text-brand-foreground">
          <Palette className="size-4" />
        </span>
        <span className="text-xs font-semibold">6K+ Creativities</span>
      </motion.div>
    </div>
  );
}
