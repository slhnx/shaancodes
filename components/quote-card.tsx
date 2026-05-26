"use client";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  delay?: number;
}

const QuoteCard = ({ quote, author, delay = 0 }: QuoteCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className="relative w-full mx-auto"
    >
      {/* Floating quote mark */}
      <div className="absolute z-10 -top-5 left-6 select-none pointer-events-none">
        <span className="text-primary/30">
          <Quote className="transform rotate-180" size={40} strokeWidth={1.5} />
        </span>
      </div>

      <div className="quote-card px-6 pt-12 pb-8 sm:px-8 sm:pt-14 sm:pb-9 md:px-10 md:pt-16 md:pb-10">
        <blockquote className="mb-6">
          <p
            className="
              quote-serif italic
              text-base sm:text-lg md:text-xl
              leading-relaxed
              text-foreground/80
            "
          >
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <footer className="flex items-center justify-end gap-2">
          <div className="h-px w-8 bg-muted-foreground/30"></div>
          <cite
            className="
              quote-serif
              text-sm sm:text-base
              text-muted-foreground
              not-italic
              font-medium
            "
          >
            {author}
          </cite>
        </footer>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
