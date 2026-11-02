import { Loader } from "@/components/hero/Loader";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/navigation/Navbar";
import { RainMatchaStory } from "@/components/manifesto/RainMatchaStory";
import { MediaMoodboard } from "@/components/visuals/MediaMoodboard";
import { MenuPreview } from "@/components/menu/MenuPreview";
import { SignaturePreview } from "@/components/visuals/SignaturePreview";
import { RainWindowExperience } from "@/components/visuals/RainWindowExperience";
import { StoryFilm } from "@/components/visuals/StoryFilm";
import { CommunityFilm } from "@/components/visuals/CommunityFilm";
import { VisitFilm } from "@/components/visuals/VisitFilm";

export default function Home() {
  return (
    <main>
      <Loader />
      <Navbar />
      <Hero />
      <MediaMoodboard />
      <RainMatchaStory />
      <RainWindowExperience />
      <MenuPreview />
      <SignaturePreview />
      <StoryFilm />
      <CommunityFilm />
      <VisitFilm />
    </main>
  );
}
