import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function LoadingReveal() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background"
          >
            {profile.monogram}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
