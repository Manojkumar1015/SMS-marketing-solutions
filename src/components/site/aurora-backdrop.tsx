import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import techAurora from "@/assets/tech-aurora.jpg";
import { cn } from "@/lib/utils";

/**
 * Aurora + animated grid + floating particles backdrop.
 * Purely decorative, fixed behind all content.
 */
export function AuroraBackdrop() {
  const reduce = useReducedMotion();
  const [particles, setParticles] = useState<
    { left: number; top: number; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 6,
        duration: 9 + Math.random() * 12,
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise">
      <motion.img
        src={techAurora}
        alt=""
        width={1536}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07] dark:opacity-[0.22] dark:mix-blend-screen"
        animate={reduce ? {} : { scale: [1.05, 1.14, 1.05], x: ["-1%", "1%", "-1%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grid-backdrop opacity-70" />

      <div
        className="absolute -left-[15%] -top-[20%] h-[45rem] w-[45rem] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--aurora-1), transparent 65%)",
          animation: reduce ? undefined : "aurora-drift 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[10%] top-[8%] h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--aurora-3), transparent 65%)",
          animation: reduce ? undefined : "aurora-drift 32s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-[30%] top-[55%] h-[40rem] w-[40rem] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--aurora-2), transparent 68%)",
          animation: reduce ? undefined : "aurora-drift 38s ease-in-out infinite",
        }}
      />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-foreground/25"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={reduce ? {} : { y: [0, -34, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/** Soft local glow used inside sections. */
export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-[100px]",
        className,
      )}
      style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 70%)" }}
    />
  );
}
