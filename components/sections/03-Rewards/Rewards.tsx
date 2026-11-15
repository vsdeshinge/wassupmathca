import { CreditCard, QrCode, Sparkles } from "lucide-react";

const steps = [
  { icon: CreditCard, title: "Earn points on every drink", text: "Enjoy your favourites and collect points on qualifying orders when Wassup Perks launches." },
  { icon: QrCode, title: "Scan in store", text: "Simply scan your rewards code at the counter to make every visit count." },
  { icon: Sparkles, title: "Enjoy your rewards", text: "Turn those points into something worth coming back for." },
];

export function Rewards() {
  return (
    <section id="rewards" className="relative z-10 isolate bg-[#1a3d4a] px-5 py-20 text-[#f9f7f4] md:px-10 md:py-28">
      <div className="mx-auto max-w-[1300px] text-center">
        <p className="brand-secondary mb-3 text-xl md:text-2xl">Wassup perks</p>
        <h2 className="brand-display text-[clamp(2.8rem,6vw,6rem)] leading-[.95]">REWARDS THAT<br className="hidden sm:block" /> MEAN BUSINESS.</h2>
        <p className="brand-secondary mx-auto mt-5 max-w-xl text-xl md:text-2xl">More matcha. More reasons to come back.</p>
        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-3 md:gap-8">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="mx-auto flex max-w-sm flex-col items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-[#f9f7f4]/40 bg-[#f9f7f4]/[.07]"><Icon size={34} strokeWidth={1.5} aria-hidden="true"/></div>
              <h3 className="brand-display mt-6 text-[clamp(1.5rem,2.4vw,2.1rem)] leading-tight">{title}</h3>
              <p className="brand-secondary mt-3 text-lg leading-relaxed text-[#f9f7f4]/80">{text}</p>
            </div>
          ))}
        </div>
        <p className="brand-secondary mx-auto mt-12 max-w-lg text-base text-[#f9f7f4]/70">Coming soon. Final programme rules and redemptions will be shared at launch.</p>
      </div>
    </section>
  );
}
