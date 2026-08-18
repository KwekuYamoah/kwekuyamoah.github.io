import { motion } from "framer-motion";
import { useMemo } from "react";

const glyphs = ["ŋ", "ɛ", "ɔ", "ʊ", "ã", "β", "ŋʷ", "ɲ", "ʔ", "ɗ"];
const amount = 12;

/**
 * Renders floating linguistic glyphs that subtly oscillate to convey NLP vibes.
 */
const FloatingParticles = () => {
  const particles = useMemo(() => {
    return new Array(amount).fill(null).map((_, idx) => {
      const glyph = glyphs[idx % glyphs.length];
      // random positions around approx radius 140px box
      const top = Math.random() * 140 - 70;
      const left = Math.random() * 200 - 100;
      const delay = Math.random() * 3;
      return { glyph, top, left, delay };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map(({ glyph, top, left, delay }, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay, ease: "easeInOut" }}
          style={{ top: `${top}px`, left: `${left}px` }}
          className="absolute text-ink-muted text-xs select-none"
        >
          {glyph}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingParticles;
