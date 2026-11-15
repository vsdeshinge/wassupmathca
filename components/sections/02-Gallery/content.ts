/**
 * GALLERY EDITOR
 * 1. Edit labels and descriptions here, not in Gallery.tsx.
 * 2. Pexels image and video URLs are temporary references; replace with approved local optimized brand media before launch.
 * 3. To enable a motion preview set media.type='video' and provide an approved MP4 in public/video/gallery/; Pexels download URLs may need hosting locally for reliable autoplay.
 * 4. Story pages automatically use each item's slug, body and chapters.
 * Editorial text is illustrative draft copy and should be approved by the brand.
 */
export type StoryChapter = { eyebrow: string; heading: string; body: string };
export type GalleryStory = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "THE DRINK" | "THE CULTURE";
  number: string;
  teaser: string;
  intro: string;
  media: { type: "image" | "video"; image: string; video?: string; alt: string; source: string; videoSource?: string };
  chapters: StoryChapter[];
};

export const galleryStories: GalleryStory[] = [
  {
    slug: "the-first-whisk", title: "THE FIRST WHISK", shortTitle: "First Whisk", category: "THE CULTURE", number: "01",
    teaser: "A quiet moment before the first sip.",
    intro: "Before the matcha reaches the cup, there is a small ritual: a little powder, a little water and the movement of a whisk. The simplest details make the moment memorable.",
    media: { type: "image", image: "https://images.pexels.com/photos/31199965/pexels-photo-31199965.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/ceramic-bowl-with-matcha-tea-on-bamboo-tray-31199965/", alt: "Pexels editorial photograph of matcha whisk and bowl" },
    chapters: [
      { eyebrow: "01 / THE BEGINNING", heading: "A SMALL RITUAL", body: "Matcha begins with attention. A measured scoop, a splash of water and a whisk turn a few ingredients into an experience." },
      { eyebrow: "02 / SLOW DOWN", heading: "TAKE YOUR TIME", body: "Sometimes the best part of the drink is the moment we take to make it." },
    ],
  },
  {
    slug: "strawberry-cloud", title: "STRAWBERRY CLOUD", shortTitle: "Strawberry", category: "THE DRINK", number: "02",
    teaser: "Soft, bright, and a little unexpected.",
    intro: "The contrast is the fun of it: green matcha, a blush of strawberry and a creamy finish. A playful meeting of fresh and familiar flavours.",
    media: { type: "video", image: "https://images.pexels.com/photos/8134134/pexels-photo-8134134.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/clear-glass-jar-with-green-and-red-liquid-topped-with-strawberry-8134134/", video: "https://videos.pexels.com/video-files/8295304/8295304-hd_1080_1920_25fps.mp4", videoSource: "https://www.pexels.com/video/a-person-pouring-syrup-on-the-milk-8295304/", alt: "Pexels editorial photograph of strawberry matcha drink" },
    chapters: [
      { eyebrow: "01 / THE CONTRAST", heading: "TWO WORLDS", body: "Strawberry brings a fruity brightness to the distinct character of matcha. Layered together, they make every sip a little different." },
      { eyebrow: "02 / THE FEELING", heading: "A LITTLE PLAYFUL", body: "Not every ritual has to be serious. Some are best enjoyed with good company and no particular rush." },
    ],
  },
  {
    slug: "ceremonial-matcha", title: "CEREMONIAL MATCHA", shortTitle: "Ceremonial", category: "THE CULTURE", number: "03",
    teaser: "The green heart of the story.",
    intro: "Matcha is more than a colour or a trend. Ground tea leaves, careful preparation and an unmistakable flavour give the drink its character.",
    media: { type: "image", image: "https://images.pexels.com/photos/32300846/pexels-photo-32300846.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/refreshing-matcha-latte-with-bamboo-whisk-32300846/", alt: "Pexels editorial photograph of ceremonial matcha bowl" },
    chapters: [
      { eyebrow: "01 / THE LEAF", heading: "GROUNDED IN GREEN", body: "Matcha is finely powdered green tea. Unlike steeped tea, the powder is whisked directly into the liquid and enjoyed as part of the drink." },
      { eyebrow: "02 / THE CUP", heading: "NOTHING EXTRA", body: "A simple bowl reveals the character of matcha: vegetal, rounded and distinctly its own." },
    ],
  },
  {
    slug: "the-green-ritual", title: "THE GREEN RITUAL", shortTitle: "Green Ritual", category: "THE CULTURE", number: "04",
    teaser: "A pause worth keeping.",
    intro: "Some daily moments become rituals because of the way they make us feel. Making matcha can be one of them: familiar, personal and quietly joyful.",
    media: { type: "video", image: "https://images.pexels.com/photos/36817949/pexels-photo-36817949.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/person-holding-bowl-of-matcha-latte-on-wooden-table-36817949/", video: "https://videos.pexels.com/video-files/8004727/8004727-hd_1080_1920_25fps.mp4", videoSource: "https://www.pexels.com/video/a-person-mixing-matcha-using-a-bamboo-whisk-8004727/", alt: "Pexels editorial photograph of matcha preparation" },
    chapters: [
      { eyebrow: "01 / THE MOMENT", heading: "MAKE ROOM", body: "A favourite cup, a familiar movement and a few minutes to yourself can change the pace of a day." },
      { eyebrow: "02 / THE EVERYDAY", heading: "REPEAT, ENJOY", body: "A ritual belongs to the person making it. There is no single right way to have your moment." },
    ],
  },
  {
    slug: "hojicha-hours", title: "HOJICHA HOURS", shortTitle: "Hojicha", category: "THE DRINK", number: "05",
    teaser: "Roasted notes, an easy pace.",
    intro: "Hojicha offers a different side of Japanese tea: roasted, comforting and mellow. A warm contrast to matcha’s vivid green personality.",
    media: { type: "image", image: "https://images.pexels.com/photos/33371820/pexels-photo-33371820.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/refreshing-iced-matcha-lattes-with-straws-33371820/", alt: "Pexels editorial photograph of hojicha latte" },
    chapters: [
      { eyebrow: "01 / THE ROAST", heading: "A DIFFERENT NOTE", body: "Hojicha is roasted Japanese green tea, often appreciated for its toasty aroma and gentler flavour profile." },
      { eyebrow: "02 / THE OCCASION", heading: "STAY A WHILE", body: "Some drinks ask for a slower afternoon, a familiar seat and a conversation that runs long." },
    ],
  },
  {
    slug: "beyond-the-cup", title: "BEYOND THE CUP", shortTitle: "Beyond", category: "THE CULTURE", number: "06",
    teaser: "Good drinks. Better moments.",
    intro: "The story isn't only about what is in the cup. It is about the catch-ups, the first conversations and the everyday moments that happen around it.",
    media: { type: "image", image: "https://images.pexels.com/photos/29684376/pexels-photo-29684376.jpeg?auto=compress&cs=tinysrgb&w=1300", source: "https://www.pexels.com/photo/iced-matcha-latte-beside-a-laptop-on-desk-29684376/", alt: "Pexels editorial photograph of matcha café moments" },
    chapters: [
      { eyebrow: "01 / THE PEOPLE", heading: "COME TOGETHER", body: "A café is made as much by the people who visit as by the drinks that are served." },
      { eyebrow: "02 / THE MEMORY", heading: "TAKE IT WITH YOU", body: "The cup may be empty by the end, but a good moment stays a little longer." },
    ],
  },
];
