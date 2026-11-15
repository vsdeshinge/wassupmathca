# V10 updates

- Hero Discover moved to lower right on desktop.
- Removed RainLayer and rain/glass CSS animations, keeping only a video with subtle legibility gradient.
- Source: user-provided Google Drive file `Wassup Matcha.mp4` (ID 1C6nSGtZ0Rj_PKS9C8Yo0JYZgIf-7ljA4). Optimized for browser to `public/video/hero/wassup-matcha-hero.mp4`, no audio, with local poster.
- Mobile menu: tapping a drink now expands/collapses inline preview without leaving the page. An explicit Read the story link remains available inside expansion.
- Removed `Our drinks` subtitle from Menu.
- Replaced text arrows with Lucide SVG icons in Menu, Story and Blog pages for Safari consistency.
- Introduced 1.618 modular typography tokens, used responsive clamp scale for menu headings/names. Original brand fonts preserved.

## Testing
Run `npm install && npm run build` and then test Safari mobile autoplay and expanded menu interactions.
