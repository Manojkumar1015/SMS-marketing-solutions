import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const easing = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easing } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing } },
};

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.09,
}: {
  children: ReactNode;
  className?: string | undefined;
  delay?: number;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  variant = fadeUp,
  delay = 0,
}: {
  children: ReactNode;
  className?: string | undefined;
  variant?: Variants;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Item({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <span className={cn("kicker inline-flex min-w-0 items-center gap-2.5", className)}>
      <span className="h-px w-8 shrink-0 bg-gradient-brand" />
      <span className="min-w-0">{children}</span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  index,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  index?: string;
}) {
  return (
    <Stagger className="rule-top pt-8">
      <div
        className={cn(
          "grid gap-6 md:gap-10",
          align === "center"
            ? "md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end"
            : "md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end",
        )}
      >
        <div className="flex min-w-0 flex-col gap-4">
          <Item className="flex min-w-0 items-center gap-4">
            {index ? <span className="index-num shrink-0">{index}</span> : null}
            <Eyebrow>{eyebrow}</Eyebrow>
          </Item>
          <Item>
            <h2 className="text-balance text-[2rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
            </h2>
          </Item>
        </div>
        {description ? (
          <Item>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          </Item>
        ) : null}
      </div>
    </Stagger>
  );
}
