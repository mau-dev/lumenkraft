import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrowserFrame, ScreenRecording, ScreenshotSlides, ScrollingScreenshot } from "@/components/BrowserFrame/BrowserFrame";
import { BackLink } from "@/components/BackLink/BackLink";
import { Contact } from "@/components/Contact/Contact";
import { ProjectCover } from "@/components/ProjectCover/ProjectCover";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { StepGrid } from "@/components/StepGrid/StepGrid";
import {
  contactSection,
  getDiscipline,
  getFeaturedProjects,
  getNextProject,
  getProject,
  getProjects,
  navigation,
  profile,
  type Showcase,
} from "@/content";
import { accentVars } from "@/lib/accent";
import { projectHref, statusLabel } from "@/lib/project";
import styles from "./page.module.css";

// Every case study is prerendered from generateStaticParams, so navigations stay fast.
// Opting out of instant validation avoids a loading fallback, which would break the cover morph.
export const instant = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${profile.brand}`,
    description: project.summary,
  };
}

function ShowcaseView({ showcase }: { showcase: Showcase }) {
  switch (showcase.kind) {
    case "scroll":
      return (
        <BrowserFrame label={showcase.label}>
          <ScrollingScreenshot image={showcase.image} />
        </BrowserFrame>
      );
    case "slides": {
      const first = showcase.images[0];
      return (
        <BrowserFrame label={showcase.label} aspectRatio={first ? first.width / first.height : undefined}>
          <ScreenshotSlides images={showcase.images} />
        </BrowserFrame>
      );
    }
    case "video":
      return (
        <BrowserFrame label={showcase.label}>
          <ScreenRecording src={showcase.src} poster={showcase.poster} label={showcase.label} />
        </BrowserFrame>
      );
    case "step-grid":
      return (
        <BrowserFrame label={showcase.label}>
          <StepGrid rows={showcase.rows} steps={showcase.steps} />
        </BrowserFrame>
      );
  }
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const featured = getFeaturedProjects();
  const index = Math.max(0, featured.findIndex((p) => p.slug === slug));
  const next = getNextProject(slug);
  const caseStudy = project.caseStudy;
  const homeNavigation = navigation.map((item) => ({ ...item, href: `/${item.href}` }));

  return (
    <>
      <SiteHeader brand={profile.brand} byline={`by ${profile.name}`} items={homeNavigation} />

      <main id="main" className={styles.page} style={accentVars(project.accent)}>
        <div className={styles.topbar}>
          <BackLink className={styles.back}>
            <span aria-hidden="true">← </span>All work
          </BackLink>
          <span className={styles.position}>
            Case study {String(index + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
          </span>
        </div>

        <ProjectCover slug={project.slug} index={index} size="hero">
          <h1>{project.title}</h1>
        </ProjectCover>

        <dl className={styles.facts}>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{statusLabel[project.status]}</dd>
          </div>
          <div>
            <dt>Disciplines</dt>
            <dd>{project.disciplines.map((id) => getDiscipline(id).label).join(", ")}</dd>
          </div>
          <div className={styles.factWide}>
            <dt>Tools</dt>
            <dd>{project.tools.join(" · ")}</dd>
          </div>
          {project.links.length > 0 && (
            <div>
              <dt>Links</dt>
              <dd className={styles.factLinks}>
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <span aria-hidden="true"> ↗</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>

        <div className={styles.intro}>
          <p className={styles.lead}>{caseStudy?.lead ?? project.summary}</p>
          {project.role && <p className={styles.role}>{project.role}</p>}
        </div>

        {caseStudy?.showcase && (
          <figure className={styles.showcase}>
            <ShowcaseView showcase={caseStudy.showcase} />
            {caseStudy.showcase.kind === "step-grid" && (
              <figcaption className={styles.caption}>{caseStudy.showcase.caption}</figcaption>
            )}
          </figure>
        )}

        {caseStudy && caseStudy.sections.length > 0 && (
          <div className={styles.sections}>
            {caseStudy.sections.map((section, i) => (
              <section key={section.heading} className={styles.section} aria-labelledby={`section-${i}`}>
                <p className={styles.sectionIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 id={`section-${i}`} className={styles.sectionHeading}>
                  {section.heading}
                </h2>
                <div className={styles.sectionBody}>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.list && (
                    <ul className={styles.list}>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}

        {caseStudy?.gallery && caseStudy.gallery.length > 0 && (
          <div className={styles.gallery}>
            {caseStudy.gallery.map((image) => (
              <figure key={image.src} className={`${styles.galleryItem} ${styles[image.size ?? "half"]}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={
                    image.size === "narrow"
                      ? "(min-width: 48rem) 25vw, 80vw"
                      : image.size === "half"
                        ? "(min-width: 48rem) 45vw, 100vw"
                        : "(min-width: 48rem) 90vw, 100vw"
                  }
                  className={styles.galleryImage}
                />
                {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        {next && (
          <Link
            href={projectHref(next.slug)}
            className={styles.next}
            style={accentVars(next.accent)}
            transitionTypes={["nav-forward"]}
          >
            <span className={styles.nextLabel}>Next project</span>
            <span className={styles.nextTitle}>
              {next.title}
              <span aria-hidden="true"> →</span>
            </span>
          </Link>
        )}
      </main>

      <Contact
        copy={contactSection}
        email={profile.email}
        socials={profile.socials}
        brand={profile.brand}
        principle={profile.principle}
      />
    </>
  );
}
