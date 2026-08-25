import { motion, useReducedMotion } from "motion/react";
import "./ServicesSection.css";

type Service = {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
};

const SERVICES = [
  {
    title: "Strategic Local Partnerships & Representation",
    description:
      "Local expert resourcing, facilitation, and single-point coordination for international consultants and EPC contractors from bidding through execution.",
    tags: [
      "Bid & execution support",
      "Local expert resourcing",
      "Authority liaison",
      "Mobilisation planning",
    ],
    image: "/assets/YCHJGgkRB7sMQLRvuj4cAnDgI.png",
  },
  {
    title: "PPP & Transaction Advisory",
    description:
      "End-to-end management of complex public-private partnerships, ensuring financial viability and regulatory compliance from inception to financial close.",
    tags: [
      "Feasibility & due diligence",
      "Procurement strategy",
      "Contract negotiation",
      "Risk allocation",
    ],
    image: "/assets/bALzNKWF74Li4qPs3Fnux5hNyQ.jpg",
  },
  {
    title: "Strategic Advisory",
    description:
      "Data-driven corporate strategy for high-growth markets, helping organizations enter, restructure, transform, and improve performance.",
    tags: ["Market entry", "Operational restructuring", "Change management", "M&A integration"],
    image: "/assets/JY6gnnC5szRzDaloNrjsKReabo.webp",
  },
  {
    title: "Stakeholder Engagement",
    description:
      "Navigating complex political and social landscapes to align interests, mitigate risk, and secure the social licence to operate.",
    tags: [
      "Community engagement",
      "Government relations",
      "Crisis communications",
      "Policy advocacy",
    ],
    image: "/assets/eoKG5OCrfjIcZFq8Ajo0MwUVJ6c.jpeg",
  },
  {
    title: "ESG & Sustainability",
    description:
      "Moving beyond compliance to integrate sustainability into core business logic, creating long-term environmental, social, and commercial value.",
    tags: [
      "Carbon footprinting",
      "Social impact assessment",
      "Governance reviews",
      "Supply chain audit",
    ],
    image: "/assets/ccmg/us-embassy-gallery-1.jpg",
  },
  {
    title: "Government, Regulatory & Engineering Support",
    description:
      "Approvals pathways, compliance tracking, institutional coordination, design interface, construction-supervision support, and ESHS alignment.",
    tags: [
      "Permits & approvals",
      "Utility coordination",
      "Construction supervision",
      "ESHS management",
    ],
    image: "/assets/ccmg/corporate-advisory.png",
  },
] satisfies readonly Service[];

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="services-section__reveal"
      role="listitem"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.66,
        delay: index * 0.085,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <article className="services-section__card">
        <figure className="services-section__media">
          <img
            className="services-section__image"
            src={service.image}
            alt=""
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="services-section__card-body">
          <h3 className="services-section__card-title">{service.title}</h3>
          <p className="services-section__description">{service.description}</p>
          <ul className="services-section__tags" aria-label={`${service.title} capabilities`}>
            {service.tags.map((tag) => (
              <li className="services-section__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
}

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-section-title"
    >
      <div className="services-section__inner">
        <header className="services-section__heading">
          <p className="section-kicker services-section__kicker">Services we provide</p>
          <h2 className="services-section__title" id="services-section-title">
            Capabilities for complex transformations.
          </h2>
        </header>

        <div className="services-section__stack" role="list">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              reduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
