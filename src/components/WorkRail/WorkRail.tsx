import type { CSSProperties } from "react";
import NextLink from "next/link";
import type { Link, Project, SectionCopy } from "@/content";
import { getDiscipline } from "@/content";
import { ProjectCover } from "@/components/ProjectCover/ProjectCover";
import { Shape } from "@/components/Shape/Shape";
import { accentVars } from "@/lib/accent";
import { projectHref, statusLabel } from "@/lib/project";
import styles from "./WorkRail.module.css";

type WorkRailProps = {
  copy: SectionCopy;
  projects: Project[];
  more?: Link;
};

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const href = projectHref(project.slug);

  return (
    <article
      className={styles.project}
      style={accentVars(project.accent)}
      aria-labelledby={`project-${project.slug}`}
      data-cover-hover
    >
      <NextLink href={href} className={styles.coverLink} transitionTypes={["nav-forward"]}>
        <ProjectCover slug={project.slug} index={index} size="panel">
          <h3 id={`project-${project.slug}`}>{project.title}</h3>
        </ProjectCover>
      </NextLink>

      <div className={styles.meta}>
        <p className={styles.facts}>
          <span>{project.year}</span>
          <span className={styles.status}>{statusLabel[project.status]}</span>
        </p>
        <p className={styles.summary}>{project.summary}</p>
        {project.role && <p className={styles.role}>{project.role}</p>}

        <dl className={styles.details}>
          <div>
            <dt>Disciplines</dt>
            <dd>{project.disciplines.map((id) => getDiscipline(id).label).join(", ")}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools.join(" · ")}</dd>
          </div>
        </dl>

        <ul className={styles.links}>
          <li>
            <NextLink href={href} className={styles.caseLink} transitionTypes={["nav-forward"]}>
              {project.caseStudy ? "Read the case study" : "More about it"}
              <span aria-hidden="true"> →</span>
            </NextLink>
          </li>
          {project.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/**
 * Horizontal project explorer. On larger screens vertical scrolling moves the
 * rail sideways (CSS scroll-driven animation); elsewhere it is a swipeable strip.
 */
export function WorkRail({ copy, projects, more }: WorkRailProps) {
  const panelCount = projects.length + (more ? 2 : 1);

  return (
    <section
      id="work"
      className={styles.work}
      aria-labelledby="work-title"
      style={{ "--count": panelCount } as CSSProperties}
    >
      <div className={styles.sticky}>
        <div className={styles.track}>
          <header className={styles.intro}>
            <p className={styles.kicker}>
              <span aria-hidden="true">01 — </span>
              {copy.kicker}
            </p>
            <h2 id="work-title" className={styles.heading}>
              {copy.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            {copy.intro && <p className={styles.introText}>{copy.intro}</p>}
            {copy.hint && (
              <p className={styles.hint} aria-hidden="true">
                {copy.hint} <span className={styles.arrow}>→</span>
              </p>
            )}
          </header>

          {projects.map((project, index) => (
            <ProjectPanel key={project.slug} project={project} index={index} />
          ))}

          {more && (
            <a href={more.href} className={styles.more} target="_blank" rel="noreferrer">
              <Shape shape="circle" className={styles.moreShape} />
              <span className={styles.moreLabel}>
                {more.label}
                <span aria-hidden="true"> ↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
