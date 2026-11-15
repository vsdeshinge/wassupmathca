# V5 mobile fixes (2026-11-15)

- Hero uses a matcha-themed Pexels MP4 source with a second fallback endpoint, a bundled lightweight illustrative video as a last resort, and a visible photographic poster while loading. **Pexels direct URLs must be checked in a network-enabled browser; the clips are not bundled.**
- Gallery mobile titles reduced from 55svh to 34svh and font size tightened, removing the long empty stretches.
- Gallery section no longer has overflow-hidden, allowing the sticky background to work with normal document scrolling.
- Gallery mobile imagery uses eager/high-priority loading for the active story; video metadata starts loading when selected.
- Gallery default images remain Pexels references.
- Rewards background is #1a3d4a and text is #f9f7f4.
- Existing fonts and other sections preserved.

## Important next step
The environment could not reach Pexels or run npm installation. Please test streaming media on a networked device. For production reliability, download licensed Pexels clips from the cited pages, transcode them to compressed H.264 MP4, and serve them from public/video (not directly from Pexels redirect endpoints).

The local fallback is an **illustrated placeholder** (not realistic footage). Replace it with a real licensed compressed MP4 for launch.
