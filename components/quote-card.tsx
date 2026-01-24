import { motion } from "framer-motion";
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
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className="relative w-full mx-auto"
    >
      {/* Quote mark */}
      <div className="absolute z-10 -top-4 left-4 select-none pointer-events-none">
        <span className="text-quote-mark">
          <Quote className="transform rotate-180 text-primary" size={34} />
        </span>
      </div>

      <div
        className="
          border border-quote-border
          rounded-lg
          bg-card/50 backdrop-blur-sm
          px-4 pt-10 pb-6
          sm:px-6 sm:pt-12 sm:pb-7
          md:px-8 md:pt-14 md:pb-8
        "
      >
        <blockquote className="mb-4 sm:mb-6">
          <p
            className="
              font-serif italic
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-quote-text
            "
          >
            “{quote}”
          </p>
        </blockquote>

        <footer className="text-right">
          <cite
            className="
              font-serif
              text-xs sm:text-sm
              text-quote-author
              not-italic
            "
          >
            — {author}
          </cite>
        </footer>
      </div>
    </motion.div>
  );
};

export default QuoteCard;
