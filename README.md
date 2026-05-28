# Mobile CV — Progressive Web App

A 5-page mobile CV built with plain HTML, CSS, and JavaScript. Installable as a PWA.

## Folder structure

```
cv-app/
├── manifest.json          ← web app manifest
├── serviceworker.js       ← offline cache
├── html/
│   ├── index.html         ← Home (photo + intro)
│   ├── aboutme.html       ← Background, education, interests
│   ├── skills.html        ← Skills + experience
│   ├── portfolio.html     ← Projects
│   └── contact.html       ← Contact + socials
├── css/stylesheet.css     ← All styling (20+ rules)
├── javascript/app.js      ← SW registration + dynamic data + menu
└── images/                ← Logo, profile, 5 icon sizes
```

## Run it in VS Code

1. Install the **Live Server** extension (by Ritwick Dey).
2. Open the `cv-app` folder in VS Code.
3. Right-click `html/index.html` → **Open with Live Server**.
4. Your browser opens at `http://127.0.0.1:5500/html/index.html`.

> Service workers only run on `http://` or `https://`, not `file://`.
> Live Server is fine.

## Install to Home Screen

**Android (Chrome):** open the site → tap ⋮ menu → **Install app** / **Add to Home screen**.

**iOS (Safari):** open the site → tap the share icon → **Add to Home Screen**.

## Where to put your info

Search the project for `TODO` — every editable spot is tagged. Quick map:

| What                | File                          | Look for                |
|---------------------|-------------------------------|-------------------------|
| Your name / role    | `javascript/app.js`           | `TODO[CV_DATA]`         |
| Skills + levels     | `javascript/app.js`           | `cvData.skills`         |
| Projects            | `javascript/app.js`           | `cvData.projects`       |
| Personal statement  | `html/index.html`             | `TODO[INTRO_TEXT]`      |
| Background          | `html/aboutme.html`           | `TODO[BACKGROUND]`      |
| Education           | `html/aboutme.html`           | `TODO[EDUCATION]`       |
| Interests           | `html/aboutme.html`           | `TODO[INTERESTS]`       |
| Work experience     | `html/skills.html`            | `TODO[EXPERIENCE]`      |
| Email / phone       | `html/contact.html`           | `TODO[CONTACT_INFO]`    |
| Reference           | `html/contact.html`           | `TODO[REFERENCE]`       |
| Social links        | `html/contact.html`           | `TODO[SOCIALS]`         |
| Page titles         | each `html/*.html` `<title>`  | `[YOUR NAME]`           |
| App name on phone   | `manifest.json`               | `"name"`, `"short_name"`|
| Your photo          | replace `images/profile.jpg`  | keep the filename       |
| Your logo           | replace `images/logo.png`     | keep the filename       |
| App icons           | replace `images/icon-*.png`   | keep filenames + sizes  |

## Theme colors

Edit the CSS variables at the top of `css/stylesheet.css` (`:root`).
Pastel pink / cream / yellow is the default.
