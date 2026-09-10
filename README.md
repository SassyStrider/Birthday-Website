# Her Birthday Site 💛

## How to use

1. **Add your photos/videos/songs** into the `/media` folder. Just drop files in — any name you like.
2. **Open `moments.js`** — this is the only file you'll ever need to edit.
   - It's a list of "moments." Each one is `image`, `video`, `song`, or `message`.
   - Copy-paste an existing entry, change the `file` name to match what you put in `/media`, write your `caption`, and place it wherever you want in the list — that's the order it plays in.
   - Don't have a photo for a moment yet? Leave it in anyway with a placeholder filename — the site will show a friendly "add this file" placeholder instead of breaking.
   - `mood` is optional — try `"warm"`, `"soft"`, `"bright"`, or `"cozy"` to change that moment's background glow.
3. **Edit the letter** at the bottom of `moments.js` — `LETTER_TITLE` and `LETTER_TEXT`.
4. Open `index.html` in a browser to preview. Click/tap or use arrow keys to move between moments.

## Hosting it for her

Easiest free option: drag this whole folder into [Netlify Drop](https://app.netlify.com/drop) — it gives you a shareable link instantly. Or GitHub Pages if you're comfortable with that.

## Notes

- No build tools, no installs — just HTML/CSS/JS. Works by opening `index.html` directly, though some browsers restrict local video/audio loading — if media doesn't load locally, use a tiny local server (or just host it, per above) and it'll work fine.
