/*
  ============================================================
    YOUR MOMENTS — edit this file only
  ============================================================
    This is the ONLY file you need to touch to add, remove, or
    reorder memories. You never need to open index.html or style.css.

  HOW TO ADD A MOMENT
  --------------------
  Copy one of the objects below, paste it into the MOMENTS array
  wherever you want it to appear (order in this array = order
  shown on the site), and fill in your own details.

  FIELDS
  --------------------
  id          optional. unique identifier like "how-we-met" or "first-date"
  type        "image" | "video" | "song" | "message"
  file        (image/video/song only) filename inside the /media
              folder. e.g. "beach-day.jpg". Just drop your file
              into /media with this exact name.
  title       optional heading shown above the caption.
  caption     The text shown with this moment. For "message" type,
              this IS the whole moment (no file needed).
  date        optional. e.g. "March 2023". Leave as "" to hide.
  mood        optional. One of: "warm" | "soft" | "bright" | "cozy"
              This tunes the background glow & accent color for
              THIS moment only, so pages can feel different from
              each other. Leave it out to use the default theme.
*/

const MOMENTS = [
  {
    id: "welcome-note",
    type: "message",
    title: "To My Ishu",
    caption: "Happy 19th Birthday, my Ishu ✨ I went down memory lane and collected all my favorite moments of us so far. Take your time scrolling through our story...",
    date: "",
    mood: "soft"
  },

  {
    id: "how-we-met",
    type: "image",
    file: "lotus_map.jpg",
    date: "January 19, 2025",
    title: "Where It All Started",
    caption: "January 19, 2025 — Just a Yoru running around Lotus until I realized I found my personal pocket Sage. You’ve been healing my heart and keeping me grounded ever since. Happy 19th Birthday to my favorite teammate, Ishu! 🌸✨",
    mood: "soft"
  },

  {
    id: "first-msg",
    type: "image",
    file: "first_msg.png",
    title: "The First DM",
    caption: "The official start of the lore 💬✨ From a simple text asking if you were coming online to play Valorant, to talking every single day. The DM where it all started.",
    date: "January 26, 2025",
    mood: "bright"
  },

  {
    id: "our-song",
    type: "song",
    file: "yeh_raaten_yeh_mausam.mp3",
    cover: "yeh_raaten_yeh_mausam.jpg",
    title: "Ye Raaten Ye Mausam 🎶",
    caption: "The song that quietly pulled us closer... Every time this melody plays, it brings back the late nights, soft laughter, and the feeling of falling for you, Ishu. ✨❤️",
    date: "The Song That Brought Us Close",
    mood: "cozy"
  },

  {
    id: "rizz-video",
    type: "video",
    file: "rizz.mp4",
    title: "Chamber Rizz",
    caption: "The exact moment I first rizzed you up in Valorant...🫣",
    date: "Valorant Rizz",
    mood: "bright"
  },

  {
    id: "the-confession",
    type: "confession",
    date: "April 19, 2025",
    title: "The Confession",
    subtitle: "3 months since Lotus",
    mood: "warm",
    message: `Hello Isha. I had something to say, I know it's out of the blue but I want to get this thing off my head. It's like 3 months we have been playing and talking all day long. I enjoyed every moment with you and tere nakhre. You are the only girl jisse maine itni baat kari and jiske saath itna time spend kara and shared a lot of stories. Like the only reason I'm online on Discord always is because I eagerly waited for your message to pop up on my screen to have those silly, funny, cute, and memorable convos with you all day long.

Tomorrow is gonna be exactly 3 months from the day we met... I could still remember the match when we first met... From the moment I first saw you on Lotus, pocket-saging my reckless Yoru teleports, I knew you were different.

For me, we aren't just friends at this point, I understand this may be weird how you feel but it was like this for me. Since then, it has been a great and playful journey with you, I could vibe with you the best rather than anyone I ever met. I also felt the same kind of attraction from your side.

But there was a point jo mujhe bohot hit hua... ki jab maine tujhse vo ex wali baat kari thi during the valo match, Icebox map, and you said that we are just friends and you don't want to get into this relationship thing again for a long time. I agree that after this whole ex thing tu wapas in cheezo mein nahi padhna chahti but fir vo all-day-long baatein jo kari thi... hum dono vo jo chit-chat karte the 5 baje tak... toh like ye sab kis liye tha?? Idts ki tere liye bhi hum dono just friends the.

Dekh, main nahi chah raha to escalate things bohot jaldi... aaram se time lekar ek doosre ko samajh sakte hai and like to get to know each other better... I just wanted to get this off my chest and express how I feel about you.

Good Night!!!`
  },

  {
    id: "yes-message",
    type: "message",
    date: "April 22, 2025",
    caption: "The day you finally said yes to me. Best decision ever. ❤️",
    mood: "bright"
  },

  {
    type: "image",
    file: "birthday_bouquet.jpeg", 
    date: "September 11, 2025", 
    caption: "Your very first birthday with me. Getting you those flowers was just the beginning of celebrating you. 💐❤️",
    mood: "warm"
  },

  {
    type: "image",
    file: "navratri_photo.jpg", 
    date: "Navratri 2025", 
    caption: "Our very first meetup during Navratri. Seeing you in person for the first time is a core memory I'll keep forever. 💃✨",
    mood: "bright"
  },

  {
    type: "image",
    file: "valentine_website.png",
    date: "14 February 2026",
    caption: "Our first Valentine's Day. You built a whole website just to ask me to be your Valentine... absolutely unmatched effort. 🥹💌",
    mood: "soft"
  },

  {
    type: "image",
    file: "promise_ring.png", 
    date: "Promise Day", 
    caption: "The promise ring proposal. Giving you this ring was my way of promising you my today, my tomorrow, and everything after. 💍✨",
    mood: "warm"
  },

  {
    id: "growing-story",
    type: "message",
    title: "Still Writing Our Chapter",
    caption: "There are so many more moments I know I'm forgetting right now — I'll keep adding them here as I remember. This is a living page, just like us.",
    date: "",
    mood: "soft"
  },

  {
    id: "random-favorite",
    type: "image",
    file: "photo_together.jpg",
    title: "Just Because",
    caption: "One of my favorites of us. No reason. Just is.",
    date: "",
    mood: "bright"
  }
];

/*
  ============================================================
    THE LETTER — shown at the very end, inside a sealed envelope
  ============================================================
    Edit LETTER_TEXT below. Use \n\n for a paragraph break.
*/
const LETTER_TITLE = "HAPPY 19th BIRTHDAY ISHU! ❤️";

const LETTER_TEXT = `Hi Ishu,

It’s your 19th birthday and it’s been more than a year that we’ve been together. We’ve had highs and lows in this span—we broke up and patched up multiple times—but at the end of the day, we stayed together. I still can’t forget the day when I confessed to you, and also the day when I gave you that promise ring.

I know that I made a lot of fuck-ups in the past, and I am genuinely really sorry for that from the bottom of my heart. I never did any of that intentionally, and I did not mean to hurt you or your feelings. I respect you, and I know that you are the best girl in the whole world. After all the fuck-ups, you never left me, and I am genuinely very lucky to have you.

Because of this, I promise you that I will work on myself even more and will try my 100% to stand up to your expectations and avoid making mistakes. As we are meeting on 13 September, I will give my 200% to discuss things and patch up again, and I know you will do the same. There is no plan B for me or another path to take after our talk. But we don't know what the future holds, so I just want to tell you this: whatever happens between us in the future, I will be there for you and by your side every single time.

I don't want to say too much, but trust me, you are my happiness, my calm, my favorite notification, my Nakchadi, my everything. I can't imagine a life without you.

I don't know what I've written above—it all just came straight from my heart and I wrote it down.

Happy Birthday once again!`;
