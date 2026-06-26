"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-content mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4"
        >
          Developer Advocate APAC
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
        >
          Kunal Das
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Building the future of cloud infrastructure at CAST AI. Cloud Native
          &amp; Kubernetes Enthusiast.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/posts/"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background no-underline transition-opacity duration-300 hover:opacity-90"
          >
            Read Blog
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground no-underline transition-colors duration-300 hover:bg-muted"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
