import { Community } from "./sections/community";
import { ContactCTA } from "./sections/contact-cta";
import { Hero } from "./sections/hero";
import { LatestPosts } from "./sections/latest-posts";
import { SelectedTalks } from "./sections/selected-talks";
import { Stats } from "./sections/stats";
import { WhatIDo } from "./sections/what-i-do";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Stats />
      <SelectedTalks />
      <LatestPosts />
      <Community />
      <ContactCTA />
    </>
  );
}
