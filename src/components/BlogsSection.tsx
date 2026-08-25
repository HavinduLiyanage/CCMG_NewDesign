import { motion, useReducedMotion } from "motion/react";
import type { BlogPost } from "../types/content";
import { ArrowIcon } from "./icons";
import "./BlogsSection.css";

const posts = [
  {
    category: "Carbon Advisory",
    title: "Carbon accounting that stands up to scrutiny",
    excerpt:
      "Auditable ESG strategy and GHG accounting for complex development projects, bridging ambition and verifiable action.",
    image: "/assets/ccmg/insight-carbon-accounting.png",
    href: "/blogs/carbon-credits-in-sri-lanka",
  },
  {
    category: "ESG Reporting",
    title: "Making Scope 1, 2, and 3 reporting actionable",
    excerpt:
      "Good ESG reporting turns emissions and impact data into a basis for decisions, disclosure, and continuous improvement.",
    image: "/assets/ccmg/insight-esg-reporting.png",
    href: "/blogs/scope-1-2-3-esg-reporting",
  },
] satisfies BlogPost[];

function BlogCard({ post, index, reduceMotion }: { post: BlogPost; index: number; reduceMotion: boolean }) {
  return (
    <motion.article
      className="blogs-section__article"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.12,
        duration: reduceMotion ? 0 : 0.68,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      <a className="blogs-section__card" href={post.href} aria-label={`Read: ${post.title}`}>
        <span className="blogs-section__media">
          <img className="blogs-section__image" src={post.image} alt="" loading="lazy" decoding="async" />
          <span className="blogs-section__category">{post.category}</span>
        </span>

        <span className="blogs-section__body">
          <span className="blogs-section__titleRow">
            <h3>{post.title}</h3>
            <span className="blogs-section__arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </span>
          <span className="blogs-section__excerpt">{post.excerpt}</span>
        </span>
      </a>
    </motion.article>
  );
}

export function BlogsSection() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="blogs" className="blogs-section" aria-labelledby="blogs-title">
      <div className="blogs-section__inner">
        <motion.header
          className="blogs-section__header"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="section-kicker blogs-section__kicker">Insights</p>
          <h2 id="blogs-title" className="blogs-section__title">
            Sustainability &amp; Market Insights
          </h2>
          <p className="blogs-section__intro">
            Practical perspective on ESG, carbon, infrastructure, and navigating Sri Lanka’s operating environment.
          </p>
        </motion.header>

        <div className="blogs-section__grid">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
