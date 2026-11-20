import { Hero } from "@/components/Hero/Hero";
import { SiteHeader } from "@/components/SiteHeader/SiteHeader";
import { disciplines, navigation, profile } from "@/content";

export default function Home() {
  return (
    <>
      <SiteHeader brand={profile.brand} items={navigation} />
      <main id="main">
        <Hero brand={profile.brand} principle={profile.principle} disciplines={disciplines} />
      </main>
    </>
  );
}
