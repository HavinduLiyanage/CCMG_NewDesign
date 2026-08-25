import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { BuildingIcon, DraftIcon, HandshakeIcon, SearchIcon } from "./icons";
import "./ProcessSection.css";

const processSteps = [
  {
    tab: "Step 1",
    phase: "Phase 01",
    title: "Assess",
    description:
      "We clarify the mandate, operating environment, stakeholders, risks, and opportunity so the right response begins with the real context.",
    image: "/assets/6Kub6esEciO3BgSrXZYBJxzXpzg.webp",
    imageAlt: "Strategic assessment",
    Icon: SearchIcon,
  },
  {
    tab: "Step 2",
    phase: "Phase 02",
    title: "Strategize",
    description:
      "We turn the assessment into an actionable route forward—aligning technical, institutional, commercial, and sustainability priorities.",
    image: "/assets/EPqSQ0y1zQNrhoTUfrkBJmg0.webp",
    imageAlt: "Advisory strategy",
    Icon: DraftIcon,
  },
  {
    tab: "Step 3",
    phase: "Phase 03",
    title: "Deliver",
    description:
      "We support delivery with local coordination, trusted relationships, and clear accountability across the decisions that determine outcomes.",
    image: "/assets/EzQC8z5dbkN6TK3r59c7DSzp98.webp",
    imageAlt: "Infrastructure delivery",
    Icon: BuildingIcon,
  },
  {
    tab: "Step 4",
    phase: "Phase 04",
    title: "Sustain Impact",
    description:
      "We help embed governance, reporting, and long-term capability so the work continues to create value after the immediate engagement.",
    image: "/assets/KLnmhaSIMUF6nrYBq4wQj79bXE.webp",
    imageAlt: "Sustained impact",
    Icon: HandshakeIcon,
  },
] as const;

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectFromKeyboard(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % processSteps.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (currentIndex - 1 + processSteps.length) % processSteps.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = processSteps.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveStep(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="process-section" aria-labelledby="process-section-title">
      <div className="process-section__inner">
        <header className="process-section__header">
          <div className="process-section__heading-group">
            <p className="section-kicker section-kicker--dark process-section__kicker">
              Our process
            </p>
            <h2 className="process-section__title" id="process-section-title">
              From complex context to lasting impact
            </h2>
          </div>
          <p className="process-section__intro">
            A clear four-phase approach for high-stakes advisory, infrastructure, and sustainability mandates.
          </p>
        </header>

        <div className="process-section__panel">
          <div className="process-section__tabs" role="tablist" aria-label="Engagement phases">
            {processSteps.map(({ tab, Icon }, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  className={`process-section__tab${isActive ? " is-active" : ""}`}
                  id={`process-tab-${index + 1}`}
                  key={tab}
                  type="button"
                  role="tab"
                  aria-controls={`process-panel-${index + 1}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(event) => selectFromKeyboard(event, index)}
                >
                  <Icon className="process-section__tab-icon" />
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          <div className="process-section__panels">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <article
                  className={`process-section__content${isActive ? " is-active" : ""}`}
                  id={`process-panel-${index + 1}`}
                  key={step.title}
                  role="tabpanel"
                  aria-labelledby={`process-tab-${index + 1}`}
                  aria-hidden={!isActive}
                >
                  <div className="process-section__copy">
                    <p className="process-section__phase">{step.phase}</p>
                    <h3 className="process-section__step-title">{step.title}</h3>
                    <p className="process-section__description">{step.description}</p>
                  </div>
                  <img
                    className="process-section__image"
                    src={step.image}
                    alt={step.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
