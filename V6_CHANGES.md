# Wassup Matcha — V6 implementation notes

## Implemented
- Hero: removed repeated Wassup Matcha headline, Bengaluru/HRS header labels and word-based Instagram/Menu buttons. Address at upper center with location pin; Instagram and menu icons centered beneath it. Hero retains video-first background.
- Navigation: new dark, rounded, bordered capsule, inspired by the supplied screenshot. Hidden over the hero; enters with a spring transition only after the hero section leaves view. Mobile full-screen menu retained.
- Gallery mobile: each story owns its background and media, fixing the older sticky-media layer that could paint over the Rewards section. Active story is highlighted as the user scrolls, while the previous one fades. Desktop retains centered typography and cursor-following media.
- Rewards: brand navy #1a3d4a background; simplified into launch teaser rather than invented loyalty mechanics.
- Menu: preserved the intentionally price-free menu, immediately visible selected drink images on mobile, added a visit CTA.
- Footer: removed visible publishing reminder text; brand colors retained.
- Location: removed unverified published opening hours, pending business confirmation.

## Brand specifications
- Cream #f9f7f4
- Navy #1a3d4a
- Bundled NF Le Petit Cochon + Pencilant Script fonts

## Media caveat and production handoff
The hero attempts Pexels video https://www.pexels.com/video/a-person-mixing-a-matcha-in-a-bowl-6683732/ via an external MP4 URL, with a local short animated placeholder fallback at `/video/hero/temporary-fallback.mp4`. Pexels video playback CANNOT be verified in this offline build environment; deploy an approved MP4 to `/public/video/hero/hero-matcha.mp4` and update the hero `videos` array to make it the first source. Gallery videos also depend on remote MP4 URLs and may fail; see PEXELS_SOURCES.md.

## Review PDF alignment
- Keep price-free menu; add visit CTA.
- Rewards now teaser until rules finalized.
- Preserve editorial brand styling; prioritize responsive polish.
- Location and contact details still require business verification; no placeholders shown as public copy.

## QA limitations
Dependencies are not installed and this environment cannot resolve external media hosts. Browser-level and Next.js production build verification remain outstanding. Test iPhone Safari and Chrome Android before release, especially hero video autoplay and gallery video source reliability.
