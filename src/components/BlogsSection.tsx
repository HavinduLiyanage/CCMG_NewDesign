import { motion, useReducedMotion } from "motion/react";
import type { Article } from "../data/routeData";
import { ArrowIcon } from "./icons";
import "./BlogsSection.css";

function BlogCard({ post, index, reduceMotion }: { post: Article; index: number; reduceMotion: boolean }) {
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
      <a className="blogs-section__card" href={`/blogs/${post.slug}`} aria-label={`Read: ${post.title}`}>
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

export function BlogsSection({ articles }: { articles: Article[] }) {
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
          {articles.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;
