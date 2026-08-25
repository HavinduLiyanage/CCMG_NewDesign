import { motion } from "motion/react";
import { ArrowIcon, PlayIcon } from "./icons";
import "./FeatureTestimonial.css";

export default function FeatureTestimonial() {
  return (
    <section className="feature-testimonial" aria-label="CCMG positioning">
      <div className="feature-testimonial__card page-shell">
        <motion.img
          className="feature-testimonial__background"
          src="/assets/ccmg/us-embassy.jpg"
          alt="Institutional infrastructure in Colombo"
          initial={{ scale: 1.035 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <div className="feature-testimonial__overlay" aria-hidden="true" />

        <motion.div
          className="feature-testimonial__content"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <div className="feature-testimonial__avatars" aria-hidden="true">
            <span>19</span>
            <span>08</span>
          </div>

          <blockquote>
            We turn complex mandates into projects that are socially responsible and commercially viable.
          </blockquote>

          <div className="feature-testimonial__meta">
            <strong>Colombo Consultants &amp; Management Group</strong>
            <span>Advisory and transaction support in Sri Lanka</span>
          </div>
        </motion.div>

        <div className="feature-testimonial__actions">
          <a
            className="feature-testimonial__video"
            href="/projects"
          >
            <span><PlayIcon /></span>
            Explore projects
          </a>
          <a className="button feature-testimonial__cta" href="#contact">
            Start a conversation <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
