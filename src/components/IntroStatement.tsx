import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import "./IntroStatement.css";

const INTRO_COPY =
  "Founded in 2006, Colombo Consultants & Management Group is a Sri Lankan advisory and transaction partner for complex mandates. We align policy, permits, finance, environmental and social safeguards, and stakeholder engagement so international ideas can succeed on Sri Lankan ground and across the region.";

const INTRO_WORDS = INTRO_COPY.split(" ");

type RevealWordProps = {
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  word: string;
};

function RevealWord({ index, progress, reduceMotion, word }: RevealWordProps) {
  const lastIndex = INTRO_WORDS.length - 1;
  const revealStart = (index / lastIndex) * 0.78;
  const revealEnd = Math.min(revealStart + 0.1, 0.9);
  const opacity = useTransform(progress, [revealStart, revealEnd], [0.2, 1]);

  return (
    <motion.span
      className="intro-statement__word"
      style={{ opacity: reduceMotion ? 1 : opacity }}
    >
      {word}
      {index < lastIndex ? " " : null}
    </motion.span>
  );
}

export default function IntroStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end start"],
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="intro-statement"
      aria-label="About Colombo Consultants & Management Group"
    >
      <div className="intro-statement__inner">
        <p className="intro-statement__copy">
          {INTRO_WORDS.map((word, index) => (
            <RevealWord
              key={`${word}-${index}`}
              index={index}
              progress={scrollYProgress}
              reduceMotion={Boolean(shouldReduceMotion)}
              word={word}
            />
          ))}
        </p>

        <a className="intro-statement__cta" href="#projects">
          Discover CCMG
        </a>
      </div>
    </section>
  );
}
