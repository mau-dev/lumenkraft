import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Hero } from "@/components/Hero/Hero";
import { Marquee } from "@/components/Marquee/Marquee";
import { PracticeGrid } from "@/components/PracticeGrid/PracticeGrid";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { WorkRail } from "@/components/WorkRail/WorkRail";
import {
  aboutSection,
  contactSection,
  disciplines,
  getFeaturedProjects,
  navigation,
  practiceSection,
  profile,
  workSection,
} from "@/content";

export default function Home() {
  const github = profile.socials.find((social) => social.label === "GitHub");

  return (
    <>
      <SiteHeader brand={profile.brand} byline={`by ${profile.name}`} items={navigation} />
      <main id="main">
        <Hero brand={profile.brand} principle={profile.principle} disciplines={disciplines} />
        <Marquee disciplines={disciplines} />
        <WorkRail
          copy={workSection}
          projects={getFeaturedProjects()}
          more={github && { label: "More on GitHub", href: github.href }}
        />
        <PracticeGrid copy={practiceSection} disciplines={disciplines} />
        <About copy={aboutSection} intro={profile.intro} principle={profile.principle} />
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
