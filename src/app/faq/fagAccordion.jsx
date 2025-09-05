"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="grid gap-3">
      {faqs.map((f, i) => {
        const expanded = open === i;

        return (
          <div key={i} className="card overflow-hidden">
            {/* Başlık */}
            <button
              onClick={() => setOpen(expanded ? null : i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center"
            >
              <span className="font-medium">{f.q}</span>
              <span className="text-gray-500" aria-hidden>
                {expanded ? "—" : "+"}
              </span>
            </button>

            {/* Açılır içerik */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -300 : 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: i % 2 === 0 ? -300 : 300 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="px-6 pb-6 text-gray-700"
                >
                  {f.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
