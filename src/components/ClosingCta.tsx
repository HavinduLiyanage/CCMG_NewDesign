import { motion } from "motion/react";
import { ArrowIcon } from "./icons";
import "./ClosingCta.css";

type ClosingCtaProps = {
  title?: string;
};

export default function ClosingCta({ title = "Ready to transform your infrastructure strategy?" }: ClosingCtaProps) {
  return (
    <section className="closing-cta" aria-labelledby="closing-cta-title">
      <img src="/assets/xil7I6l5QGBFKgYQWzIcUX9pH8.webp" alt="Infrastructure development site" loading="lazy" />
      <div className="closing-cta__veil" aria-hidden="true" />
      <motion.div
        className="closing-cta__content"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 id="closing-cta-title">{title}</h2>
        <a className="button closing-cta__button" href="/contact">
          Book a Consultation <ArrowIcon />
        </a>
      </motion.div>
    </section>
  );
}
