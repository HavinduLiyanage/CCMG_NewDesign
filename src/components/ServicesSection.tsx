import { motion, useReducedMotion } from "motion/react";
import type { CmsService } from "../data/cmsContent";
import "./ServicesSection.css";

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: CmsService;
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

export function ServicesSection({ services }: { services: CmsService[] }) {
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
          {services.map((service, index) => (
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
