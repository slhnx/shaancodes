"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <footer className="px-6 py-8 border-t border-muted">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-muted-foreground">
          <p>
            Designed & Developed by
            <span className="mx-1 text-foreground font-medium">Shaan Alam</span>
            with ❤️
          </p>
        </div>
        <div className="text-right text-muted-foreground">
          <p className="text-muted-foreground">
            You're the <span className="mx-[0.5] font-medium">#{count}</span> visitor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
