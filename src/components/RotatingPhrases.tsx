import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Phrase {
  original: string;
  transliteration: string;
  lang: string;
}

const phrases: Phrase[] = [
  { original: "Akwaaba", transliteration: "Welcome", lang: "Twi" },
  { original: "Kaabo", transliteration: "Welcome", lang: "Yoruba" },
  { original: "Karibu", transliteration: "Welcome", lang: "Swahili" },
  { original: "Sannu", transliteration: "Hello", lang: "Hausa" },
  { original: "Sawubona", transliteration: "I see you", lang: "Zulu" },
];

/**
 * Rotates through African-language greeting phrases.
 * Shows smooth fade/slide transition plus a brief transliteration subtitle.
 */
const RotatingPhrases = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const current = phrases[index];
  return (
    <div className="flex flex-col items-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={current.original}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-right text-xl md:text-2xl font-accent text-gray-20 tracking-wide"
        >
          {current.original}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={current.transliteration}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-gray-200 italic"
        >
          {current.transliteration} – {current.lang}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingPhrases;
