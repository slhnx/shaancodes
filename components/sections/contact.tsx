"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="bg-background flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-0 mb-16">
            <div className="text-accent text-xl">+</div>
            <div className="flex-1 h-px bg-accent"></div>
            <div className="text-accent text-xl">+</div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Have a project in mind? Let's create something amazing.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <a href="mailto:shaanalam369@gmail.com">
                <Button variant="outline" size="lg">
                  Email Me
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-0 mt-16">
            <div className="text-accent text-xl">+</div>
            <div className="flex-1 h-px bg-accent"></div>
            <div className="text-accent text-xl">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
