import { motion } from "motion/react";
import "./TestimonialsSection.css";

const principles = [
  {
    quote: "We build credibility through long-standing relationships and a clear understanding of how decisions move through Sri Lankan institutions.",
    name: "Institutional Trust",
    role: "The foundation of durable delivery",
    initials: "IT",
  },
  {
    quote: "We translate global ambition into actions that reflect local context, stakeholders, and operating realities.",
    name: "Local Fluency",
    role: "Context that informs every decision",
    initials: "LF",
  },
  {
    quote: "We stay accountable for moving the mandate forward, connecting strategy, institutions, technical work, and implementation.",
    name: "Outcome Ownership",
    role: "Advice designed to be delivered",
    initials: "OO",
  },
  {
    quote: "We focus on value that lasts—bringing environmental, social, and governance priorities into decisions that shape the future.",
    name: "Sustainable Impact",
    role: "Progress that creates enduring value",
    initials: "SI",
  },
];

function TestimonialCard({ item, duplicate = false }: { item: (typeof principles)[number]; duplicate?: boolean }) {
  return (
    <article className="testimonials__card" aria-hidden={duplicate || undefined}>
      <div className="testimonials__quote">&quot;</div>
      <p>{item.quote}</p>
      <footer>
        <span className="testimonials__initials" aria-hidden="true">{item.initials}</span>
        <strong>{item.name}</strong>
        <span>{item.role}</span>
      </footer>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <motion.header
        className="testimonials__heading page-shell"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
          <p className="section-kicker">What guides us</p>
        <h2 className="section-title" id="testimonials-title">
          Four principles behind every CCMG mandate
        </h2>
      </motion.header>

      <div className="testimonials__viewport" tabIndex={0} aria-label="CCMG principles. Focus or hover to pause the moving list.">
        <div className="testimonials__rail">
          {principles.map((item) => <TestimonialCard item={item} key={item.name} />)}
          {principles.map((item) => <TestimonialCard item={item} duplicate key={`${item.name}-clone`} />)}
        </div>
      </div>
    </section>
  );
}
