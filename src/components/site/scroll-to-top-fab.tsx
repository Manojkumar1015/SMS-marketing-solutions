import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTopFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to home / top of page"
          className="fixed bottom-5 left-5 z-50 flex size-12 cursor-pointer items-center justify-center rounded-sm border border-border/80 bg-card/80 text-primary shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-gradient-brand hover:text-brand-foreground md:size-13"
        >
          <ArrowUp className="size-5 md:size-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
