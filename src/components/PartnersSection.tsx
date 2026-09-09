import { motion } from "motion/react";
import type { CmsPartner } from "../data/cmsContent";
import "./PartnersSection.css";

export default function PartnersSection({ partners }: { partners: CmsPartner[] }) {
  return (
    <section className="partners" id="partners" aria-labelledby="partners-title">
      <div className="partners__inner page-shell">
        <motion.div className="partners__heading" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}>
          <p className="section-kicker">Partner network</p>
          <h2 className="section-title" id="partners-title">Collaborating across complex mandates</h2>
        </motion.div>
        <p className="partners__intro">CCMG’s collaboration network spans international consultants, engineering firms, technology providers, EPC contractors, and sustainability specialists.</p>
        <div className="partners__logoGrid" aria-label="Companies represented in CCMG partner reference">
          {partners.map((partner, index) => (
            <motion.figure className="partners__logo" key={partner.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: Math.min(index * 0.035, 0.42), duration: 0.5 }}>
              <img src={partner.image} alt={partner.name} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
