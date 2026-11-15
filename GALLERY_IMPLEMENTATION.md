# Wassup Matcha — Interactive Story Gallery V3

## Design decisions
- Cream editorial gallery (`#f5f3eb`), centered staggered monospace typography.
- Hover highlights each title and reveals floating rounded media with a spring-following pointer movement.
- Switching active titles crossfades the media without resetting the floating element position.
- Mouse click navigates immediately to a full editorial story page; touch taps reveal a preview first, then navigate.
- Six stories: The First Whisk, Strawberry Cloud, Ceremonial Matcha, The Green Ritual, Hojicha Hours, Beyond the Cup.
- Story routes are statically generated at `/stories/[slug]`.
- All other homepage sections remain unchanged.

## Files to edit
- `components/sections/02-Gallery/content.ts` — all story titles, categories, descriptions, chapters, media filenames.
- `components/sections/02-Gallery/Gallery.tsx` — gallery interaction and layout.
- `components/sections/02-Gallery/FloatingStoryMedia.tsx` — floating follow effect, video/image behavior.
- `components/sections/02-Gallery/gallery.css` — isolated gallery visual styling.
- `app/stories/[slug]/page.tsx` — editorial story page template.
- `public/images/gallery/` — replace six illustrated placeholder SVG files with approved photography and update paths in content.ts.
- `public/video/gallery/` — replace two demo pan/zoom placeholder MP4s with real matcha motion footage. Update paths in content.ts.

## Before launch
- Placeholder SVG visuals and demo MP4s are *not* final brand photography.
- Editorial story text is draft, not verified product/menu or company history.
- Confirm whether the Hojicha story represents an actual café offering. If not, replace or recategorize it.
- Optimize final video assets for web and verify mobile performance.
- Test hover, mouse click, first/second tap, focus keyboard navigation, iOS Safari, and reduced-motion settings.

## To run
```
npm ci
npm run dev
npm run build
```

## Technical validation
- Project structure was inspected; implementation code and local assets have been created.
- `npm ci --offline` could not finish because a dependency was not cached.
- Online dependency installation timed out in this environment, so the Next.js production build and interactive browser QA were not completed here.
