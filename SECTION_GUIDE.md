# Wassup Matcha — copy/paste section guide

Each homepage section lives in a separate numbered folder under `components/sections/`.

01 Hero — `01-Hero/Hero.tsx` (CTA: Instagram + View Menu)
02 Gallery — `02-Gallery/Gallery.tsx`; edit gallery media in `content.ts`
03 Rewards — `03-Rewards/Rewards.tsx` (do not publish specific rewards ratios until confirmed)
04 Menu — `04-Menu/MenuPreview.tsx`; edit drink names/media in `content.ts` (no pricing)
05 Blog — `05-Blog/Blog.tsx`; edit article text in `content.ts`; pages in `app/blog/`
06 Newsletter — `06-Newsletter/Newsletter.tsx`; API integration in `app/api/newsletter/route.ts`
07 Location — `07-Location/Location.tsx`; confirm address, opening times, and Maps pin
08 Footer — `08-Footer/Footer.tsx`; confirm contact/legal/social information

Navbar — `components/layout/Navbar.tsx` — transparent on hero; glass after hero is completely gone.
Homepage sequence — `app/page.tsx` — one line per section.
SEO — `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and individual blog routes.

## Before publishing
1. Confirm cafe address and opening hours; shortened Maps share link couldn't be independently resolved.
2. Replace external demo gallery/menu videos with actual café and drink content.
3. Set `NEXT_PUBLIC_SITE_URL` for sitemap and canonical base.
4. Configure `BREVO_API_KEY` and `BREVO_LIST_ID` or newsletter returns an honest unavailable message.
5. Confirm reward earning/redemption terms; the supplied screenshot is a visual reference, not approved programme policy.
6. Add business email, phone, policies, and Google Business Profile linking.
7. Review blog drafts for brand voice and factual accuracy before publishing.
