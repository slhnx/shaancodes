"use client";

import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <section className="bg-background flex flex-col" id="contact">
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl">
          <div className="section-divider mb-20"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-heading section-heading">
              Let&apos;s work together
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s create something remarkable.
            </p>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="mailto:shaanalam369@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="shimmer-btn group px-8 py-6 text-base font-medium rounded-xl"
                >
                  <Mail size={18} className="mr-2" />
                  Get in Touch
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
            </div>
          </motion.div>

          <div className="section-divider mt-20"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
