import { ViewTransition, type CSSProperties } from "react";
import type { Metadata } from "next";
import { BackLink } from "@/components/BackLink/BackLink";
import { Contact } from "@/components/Contact/Contact";
import { Shape } from "@/components/Shape/Shape";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { aboutPage, contactSection, navigation, profile, type AboutSection } from "@/content";
import { accentVars } from "@/lib/accent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `About ${profile.name} — ${profile.brand}`,
  description: aboutPage.lead,
};

function EditorialSection({ id, section, number }: { id: string; section: AboutSection; number: string }) {
  return (
    <section className={styles.editorial} aria-labelledby={id}>
      <p className={styles.index} aria-hidden="true">
        {number}
      </p>
      <h2 id={id} className={styles.editorialHeading}>
        {section.heading}
      </h2>
      <div className={styles.editorialBody}>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {section.quote && (
        <blockquote className={styles.quote}>
          <Shape shape="spark" className={styles.quoteMark} />
          <p>{section.quote}</p>
        </blockquote>
      )}
    </section>
  );
}

export default function AboutPage() {
  const homeNavigation = navigation.map((item) => ({ ...item, href: `/${item.href}` }));
  const { beyondCode, exploring, outside } = aboutPage;

  return (
    <>
      <SiteHeader brand={profile.brand} byline={`by ${profile.name}`} items={homeNavigation} />

      <main id="main" className={styles.page}>
        <div className={styles.topbar}>
          <BackLink className={styles.back}>
            <span aria-hidden="true">← </span>Home
          </BackLink>
          {profile.location && <span>{profile.location}</span>}
        </div>

        {/* Hero: the yellow dot from the homepage button grows into this sun */}
        <header className={styles.hero}>
          <ViewTransition name="meet-maria" share="morph" default="none">
            <div className={styles.sun} aria-hidden="true" />
          </ViewTransition>
          <Shape shape="spark" className={styles.heroSpark} />
          <p className={styles.kicker}>{aboutPage.kicker}</p>
          <h1 className={styles.title}>
            {aboutPage.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className={styles.lead}>{aboutPage.lead}</p>
        </header>

        <p className={styles.story}>{aboutPage.story}</p>

        <EditorialSection id="beyond-code" section={beyondCode} number="01" />

        {/* Path: a timeline with one shape per chapter */}
        <section className={styles.path} aria-labelledby="path-title">
          <p className={styles.index} aria-hidden="true">
            02
          </p>
          <h2 id="path-title" className={styles.sectionTitle}>
            <span>My</span> <em>path</em>
          </h2>
          <ol className={styles.timeline}>
            {aboutPage.chapters.map((chapter, index) => (
              <li key={chapter.title} className={styles.chapter} style={{ "--i": index } as CSSProperties}>
                <span className={styles.marker}>{chapter.marker}</span>
                <Shape shape={chapter.shape} className={styles.chapterShape} />
                <div className={styles.chapterText}>
                  <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills: a ruled grid of groups */}
        <section className={styles.skills} aria-labelledby="skills-title">
          <p className={styles.index} aria-hidden="true">
            03
          </p>
          <h2 id="skills-title" className={styles.sectionTitle}>
            <span>Technical</span> <em>skills</em>
          </h2>
          <div className={styles.skillGrid}>
            {aboutPage.skills.map((group) => (
              <div key={group.group} className={styles.skillGroup}>
                <h3 className={styles.skillHeading}>{group.group}</h3>
                <ul className={styles.tags}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <EditorialSection id="exploring" section={exploring} number="04" />

        {/* Outside of work */}
        <section className={styles.outside} aria-labelledby="outside-title">
          <p className={styles.index} aria-hidden="true">
            05
          </p>
          <h2 id="outside-title" className={styles.sectionTitle}>
            {outside.heading}
          </h2>
          <p className={styles.outsideBody}>{outside.body}</p>
          <ul className={styles.interests}>
            {outside.interests.map((interest) => (
              <li key={interest.label} className={styles.interest} style={accentVars(interest.accent)}>
                <Shape shape={interest.shape} className={styles.interestShape} />
                {interest.label}
              </li>
            ))}
          </ul>
        </section>
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
