"use client";
import { useEffect, useState } from "react";
import { Heart, Eye } from "lucide-react";

const Footer = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <footer className="px-6 py-10">
      <div className="section-divider mb-8"></div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm tracking-wide">
        <div className="text-muted-foreground flex items-center gap-1.5">
          <span>Designed & Developed by</span>
          <span className="text-foreground font-semibold">Shaan Alam</span>
          <span>with</span>
          <Heart size={14} className="text-red-500 fill-red-500 inline" />
        </div>
        <div className="visitor-badge text-muted-foreground text-xs">
          <Eye size={14} className="text-muted-foreground/60" />
          <span>
            <span className="text-foreground font-semibold">{count ?? "..."}</span> visits
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
