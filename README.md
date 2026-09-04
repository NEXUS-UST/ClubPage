# NEXUS at the University of St. Thomas

NEXUS is a student club that builds things with AI, and this is the website it runs on.

**Status:** Live · GitHub Pages from `main` · 37 commits · public

|  |  |
|---|---|
| **What it is** | The public website for NEXUS — who the club is, who runs it, how to join, and the Buildfest event site |
| **Who it's for** | UST students deciding whether to join, plus judges, mentors and sponsors |
| **Live at** | [ustnexus.club](https://ustnexus.club) · [/board.html](https://ustnexus.club/board.html) · [/buildfest/](https://ustnexus.club/buildfest/) |
| **Stack** | HTML · CSS · vanilla JavaScript · GitHub Pages · custom domain |
| **Status** | Live · HTTPS certificate approved · last content update February 2026 |

A student club gets one shot at a first impression: a link in a group chat, opened on a phone,
between classes. This repository is that link. It is three hand-written pages — the club, the
board, and the event — with no CMS, no framework and no build step, so any member with a text
editor can fix a typo and see it live two minutes later.

## What it does

- **Introduces the club** — what NEXUS is, its three values, and its vision, on one scrolling page
- **Names the people** — eight board members with photos and LinkedIn profiles, on the homepage and at `/board.html`
- **Runs recruitment** — a "Join the Movement" section and a contact form for prospective members
- **Hosts Buildfest** — the full event microsite at `/buildfest/`: theme, judges, schedule, FAQ and registration
- **Publishes the winners** — the three winning Buildfest projects, credited, after the event
- **Catches bad URLs** — a branded 404 page instead of GitHub's default

## Who it's for

Students first. Everything above the fold answers "should I join this?" and every path leads to the
same two actions: email the club, or come to the next event. Judges, mentors and sponsors get the
second audience: `/buildfest/` is written for them, which is why the schedule and the FAQ are on the
public page rather than in a shared document.

## Quickstart

The site is static. Clone it and open `index.html`, or run a server so relative paths resolve:

```bash
git clone https://github.com/NEXUS-UST/ClubPage.git
cd ClubPage
npm install && npm run dev        # live-server on http://localhost:3005
```

No Node available, no problem — anything that serves a directory works:

```bash
python3 -m http.server 8000
```

The only dev dependency is `live-server`. There is no build, no bundler and no framework.

## How it's organised

```
ClubPage/
├── index.html          # The homepage: home, about, vision, board, join, contact
├── board.html          # Standalone board page — the eight members, photos and LinkedIn links
├── 404.html            # Branded not-found page (custom_404 enabled on Pages)
├── style.css           # Design system: dark theme, UST purple, Inter + JetBrains Mono
├── script.js           # Nav, scroll animations, contact-form validation
├── buildfest/          # Tommie Buildfest 2026 microsite: about, judges, winners, schedule, FAQ
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── pictures/       # Winner and group photos
├── Event-personal site/  # Older copy of the build workshop — superseded, see below
├── package.json        # Only a dev dependency: live-server
├── CNAME               # ustnexus.club — read by GitHub Pages
└── .nojekyll           # Serve files as-is; skip Jekyll processing
```

Images are committed at full resolution, so the repository is around 18 MB — most of it photography.

## Deploying

GitHub Pages serves `main` from the repository root. Push and it is live; there is no workflow file.
The custom domain comes from `CNAME`, the certificate covers `ustnexus.club` and `www.ustnexus.club`,
and a custom 404 is enabled. To roll back, revert the commit and push — the previous build is not kept.

## Known limitations

- **The contact form does not deliver.** `script.js` validates the fields and shows a success
  message, but submission is simulated locally. Use the `mailto:` link until a form backend is wired in.
- **`/buildfest/` is not linked from the homepage.** It is reachable only by typing the URL.
- **`Event-personal site/` is a stale duplicate** of the workshop site, including its own `CNAME`.
  The maintained version is [NEXUS-UST/build-workshop](https://github.com/NEXUS-UST/build-workshop).
- **`DEPLOY_INSTRUCTIONS.md` and `nodebb-setup.md` describe an abandoned forum project**, not this
  site. They are out of date and should be deleted rather than followed.
- **HTTPS is not enforced** in the Pages settings, though a valid certificate exists.

## License

MIT for the site code, as declared in `package.json`. No `LICENSE` file is committed yet, so add one
before reusing the code. Club branding, photographs and member portraits are not covered — ask first
at [nexus@stthomas.edu](mailto:nexus@stthomas.edu).

Workshop material: [NEXUS-UST/build-workshop](https://github.com/NEXUS-UST/build-workshop).
