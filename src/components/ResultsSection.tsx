import { motion } from "motion/react";
import type { Stat } from "../types/content";
import "./ResultsSection.css";

const stats: Stat[] = [
  {
    value: "19+",
    label: "Years of excellence",
    description: "Navigating complex regulatory landscapes and delivering viable frameworks across South Asia.",
  },
  {
    value: "$4.2B",
    label: "Project value",
    description: "Cumulative value of infrastructure and energy projects structured and advised.",
  },
  {
    value: "100%",
    label: "Stakeholder alignment",
    description: "Deep integration with government bodies, development banks, and private investors.",
  },
  {
    value: "2006",
    label: "Established",
    description: "Sri Lankan advisory and transaction support for complex public and private-sector mandates.",
  },
];

export default function ResultsSection() {
  return (
    <section className="results" aria-labelledby="results-title">
      <div className="results__blueprint" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => <i key={index} />)}
      </div>

      <div className="results__inner page-shell">
        <motion.header
          className="results__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker section-kicker--dark">Results</p>
          <h2 className="section-title section-title--light" id="results-title">
            Impact that can be measured
          </h2>
        </motion.header>

        <div className="results__grid">
          {stats.map((stat, index) => (
            <motion.article
              className="results__card"
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <strong className="results__value">{stat.value}</strong>
              <div className="results__copy">
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
