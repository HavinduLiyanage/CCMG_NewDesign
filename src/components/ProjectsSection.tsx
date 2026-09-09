import type { PointerEvent } from "react";
import type { CmsProject } from "../data/cmsContent";
import "./ProjectsSection.css";

function updateTilt(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType === "touch") return;

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
  const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

  card.style.setProperty("--project-tilt-x", `${(-vertical * 6).toFixed(2)}deg`);
  card.style.setProperty("--project-tilt-y", `${(horizontal * 6).toFixed(2)}deg`);
}

function resetTilt(event: PointerEvent<HTMLAnchorElement>) {
  event.currentTarget.style.setProperty("--project-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--project-tilt-y", "0deg");
}

function ProjectCard({ project, duplicate = false }: { project: CmsProject; duplicate?: boolean }) {
  return (
    <a
      className="projects-section__card"
      href={`/projects/${project.slug}`}
      aria-label={`${project.title}, ${project.location}`}
      tabIndex={duplicate ? -1 : undefined}
      onPointerMove={updateTilt}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <img
        className="projects-section__image"
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className="projects-section__category">{project.category}</span>
      <span className="projects-section__card-copy">
        <span className="projects-section__card-title">{project.title}</span>
        <span className="projects-section__location">{project.location}</span>
      </span>
    </a>
  );
}

function ProjectGroup({ projects, duplicate = false }: { projects: CmsProject[]; duplicate?: boolean }) {
  return (
    <div
      className={`projects-section__group${duplicate ? " projects-section__group--duplicate" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {projects.map((project) => (
        <ProjectCard
          key={`${duplicate ? "duplicate-" : ""}${project.title}`}
          project={project}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

export function ProjectsSection({ projects }: { projects: CmsProject[] }) {
  return (
    <section className="projects-section" id="projects" aria-labelledby="featured-projects-title">
      <div className="projects-section__inner">
        <header className="projects-section__header">
          <div className="projects-section__heading-group">
            <p className="section-kicker projects-section__kicker">Projects</p>
            <h2 className="projects-section__title" id="featured-projects-title">
              Selected Experience
            </h2>
          </div>
          <p className="projects-section__intro">
            A selection of advisory engagements shaped by institutional trust, local fluency, and durable impact.
          </p>
        </header>

        <div className="projects-section__viewport">
          <div className="projects-section__track">
            <ProjectGroup projects={projects} />
            <ProjectGroup projects={projects} duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
