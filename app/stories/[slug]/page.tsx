import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleryStories } from "@/components/sections/02-Gallery/content";
import { drinks } from "@/components/sections/04-Menu/content";
import { StoryVisual } from "@/components/sections/02-Gallery/FloatingStoryMedia";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return [...galleryStories, ...drinks].map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = galleryStories.find(item => item.slug === slug);
  const drink = drinks.find(item => item.slug === slug);
  return { title: story?.title ?? (drink ? `${drink.name} | Wassup Matcha` : "Story"), description: story?.teaser ?? (drink ? `Explore ${drink.name} at Wassup Matcha.` : undefined) };
}
export default async function MatchaStoryPage({ params }: Props) {
  const { slug } = await params;
  const index = galleryStories.findIndex(item => item.slug === slug);
  if (index < 0) {
    const drink = drinks.find(item => item.slug === slug);
    if (!drink) notFound();
    return <main className="min-h-screen bg-[#f9f7f4] text-[#1a3d4a]">
      <div className="mx-auto max-w-[1200px] px-5 pb-24 pt-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-4 border-b border-[#1a3d4a]/25 pb-5 brand-secondary text-[11px] uppercase tracking-[.14em]">
          <Link href="/#menu" className="transition-opacity hover:opacity-60">← BACK TO THE MENU</Link>
          <span>WASSUP MATCHA / THE MENU</span>
        </header>
        <article className="pt-16 md:pt-24">
          <p className="brand-secondary text-center text-xs uppercase tracking-[.25em]">{drink.category}</p>
          <h1 className="brand-display mx-auto mt-6 max-w-[1000px] text-center text-[clamp(3rem,9vw,8rem)] leading-[.94]">{drink.name}</h1>
          <div className="mx-auto mt-12 aspect-[4/5] max-h-[750px] max-w-[880px] overflow-hidden rounded-2xl bg-[#1a3d4a]/10 sm:aspect-[5/4]">
            <img src={drink.image} alt={`${drink.name} – illustrative drink photograph`} className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto mt-12 max-w-[880px] border-t border-[#1a3d4a]/25 pt-8 md:mt-20">
            <p className="brand-secondary text-sm uppercase tracking-[.18em]">A LITTLE MORE ABOUT {drink.name.toUpperCase()}</p>
            <p className="brand-secondary mt-6 max-w-[650px] text-xl leading-relaxed md:text-3xl">Meet {drink.name}, one of the drinks featured on the Wassup Matcha menu. Come discover it in person.</p>
            <p className="mt-6 text-sm opacity-70">Images are temporary editorial references. Drink ingredients and preparation details will be added once confirmed by the café.</p>
            <Link href="/#visit" className="mt-10 inline-flex rounded-full bg-[#1a3d4a] px-7 py-3 text-[#f9f7f4]">Find us ↗</Link>
          </div>
        </article>
      </div>
    </main>;
  }
  const story = galleryStories[index];
  const next = galleryStories[(index + 1) % galleryStories.length];
  return <main className="min-h-screen bg-[#f9f7f4] text-[#1a3d4a]">
    <div className="mx-auto max-w-[1600px] px-5 pb-24 pt-8 sm:px-10 lg:px-16">
      <header className="flex items-center justify-between gap-4 border-b border-[#1a3d4a] pb-5 brand-secondary text-[11px] uppercase tracking-[.14em]">
        <Link href="/#gallery" className="transition-opacity hover:opacity-60">← BACK TO THE STORIES</Link>
        <span>WASSUP MATCHA® / {story.number}</span>
      </header>
      <article>
        <div className="mx-auto max-w-[1050px] pb-10 pt-24 text-center md:pt-32">
          <p className="brand-secondary text-xs uppercase tracking-[.25em] text-[#1a3d4a]">{story.category} / STORY {story.number}</p>
          <h1 className="brand-display mt-7 text-[clamp(3rem,9.1vw,9.5rem)] font-normal leading-[.91] tracking-[-.075em]">{story.title}</h1>
          <p className="mx-auto mt-8 max-w-lg brand-secondary text-sm text-[#1a3d4a]">{story.teaser}</p>
        </div>
        <div className="mx-auto aspect-[5/4] max-h-[720px] w-full max-w-[1050px] overflow-hidden rounded-[18px] sm:aspect-[16/9]">
          <StoryVisual story={story}/>
        </div>
        <div className="mx-auto grid max-w-[1050px] gap-8 border-b border-[#1a3d4a] py-16 md:grid-cols-[1fr_2fr] md:py-24">
          <p className="brand-secondary text-xs uppercase tracking-[.2em] text-[#1a3d4a]">AN INTRODUCTION / {story.number}</p>
          <p className="brand-secondary text-[clamp(1.25rem,2.5vw,2.5rem)] font-semibold leading-snug tracking-[-.035em]">{story.intro}</p>
        </div>
        {story.chapters.map((chapter, i) => <section key={chapter.eyebrow} className="mx-auto grid max-w-[1050px] gap-7 border-b border-[#1a3d4a] py-16 md:grid-cols-[1fr_2fr] md:py-24">
          <p className="brand-secondary text-[11px] tracking-[.16em] text-[#1a3d4a]">{chapter.eyebrow}</p>
          <div><h2 className="brand-secondary text-[clamp(2rem,4vw,4rem)] font-normal leading-none tracking-[-.07em]">{chapter.heading}</h2>
            <p className="mt-7 max-w-xl brand-secondary text-sm leading-8 text-[#1a3d4a]">{chapter.body}</p>
          </div>
          {i === 0 && <div className="md:col-start-2"><div className="aspect-[16/8] overflow-hidden rounded-[14px] opacity-90"><StoryVisual story={story}/></div></div>}
        </section>)}
      </article>
      <Link href={`/stories/${next.slug}`} className="group mt-20 block border-b border-[#1a3d4a] pb-10">
        <span className="brand-secondary text-[11px] uppercase tracking-[.18em] text-[#1a3d4a]">NEXT STORY ↗</span>
        <span className="mt-5 block brand-secondary text-[clamp(2.6rem,7vw,7rem)] font-normal leading-none tracking-[-.07em] transition-transform group-hover:translate-x-2">{next.title}</span>
      </Link>
      <footer className="mt-10 flex justify-between brand-secondary text-[10px] uppercase tracking-[.17em] text-[#1a3d4a]"><span>WASSUP MATCHA</span><Link href="/">BACK HOME ↗</Link></footer>
    </div>
  </main>;
}
