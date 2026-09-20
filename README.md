# zacharybrown.github.io

Single-page personal site. Static HTML, one stylesheet, ~40 lines of vanilla JS.
No build step, no framework, no dependencies, no tracking.

```
index.html
assets/
  css/style.css
  js/main.js
  img/            ← your photos go here (empty for now)
  docs/
    zachary-brown-resume.pdf
    project-alpha-deck.pdf   ← team contact page removed, see below
COPY-DRAFT.md     ← editorial plan; delete before publishing
```

## Preview it locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` by double-clicking also works,
but the local server matches how GitHub Pages will serve it.

---

## Before this goes public

Five things are unfinished, and each one is marked in the page with a **yellow dashed
draft block** so it cannot ship by accident. Search `index.html` for `NEEDS ZACH`.

| # | What's missing | Where |
|---|---|---|
| 1 | Jiu-jitsu: when you started, your gym, your belt, one loss that changed how you train | Section 2, block 01 |
| 2 | Soccer: UPSL club, position, the All-Conference season, one good loss | Section 2, block 02 |
| 3 | London: what you actually observed. Plus the Côte d'Azur context | Section 2, block 03 |
| 4 | Recalc specifics from the members you spoke with | Section 4 |
| 5 | Teammate sign-off on publishing the Project Alpha deck | Section 3 |

### On the deck

The linked copy is 48 pages, not 49. Page 2 of the original was the Palmetto Partners
team page, carrying Gem Granofsky's, Ross Kantor's, and Lucas Vaca Narvaja's FSU emails
and personal phone numbers. Publishing that would put three other people's contact
details on the open internet, so it was removed. The table of contents page numbers are
now off by one as a result.

The deck is still team work. Get their okay, or delete the link in
Section 3 of `index.html`.

### On the résumé

The linked résumé carries your phone number and personal email. That is your call to
make, but a PDF on a public GitHub Pages site is crawlable and will be scraped. If you
would rather not, delete the `contact__aux` paragraph at the bottom of `index.html`.

---

## Adding photos

Five slots are wired up. Each one is a `<div class="photo-slot">` with the exact
replacement markup in an HTML comment directly above it.

| Slot | File | Shape |
|---|---|---|
| Hero | `assets/img/headshot.jpg` | portrait, ~800×1000 |
| Jiu-jitsu | `assets/img/jiujitsu.jpg` | landscape, ~1200×800 |
| Soccer ×2 | `assets/img/soccer-1.jpg`, `soccer-2.jpg` | landscape, ~1200×800 |
| London | `assets/img/london.jpg` | landscape, ~1200×800 |

Replace the `<div>` with the `<img>` from the comment above it, and **write real alt
text** describing what is in the photo. Keep each file under about 300KB so the page
stays fast.

---

## Facts on the page, and where they came from

Everything factual is from your résumé or the Project Alpha deck, except three things
you told me directly and which are **not** on your résumé:

- AP Scholar
- UPSL semi-professional soccer
- Eight weeks in FSU's London program

Deliberately left off, because they are not on your résumé and I had no titles or dates:
**LDR Partners**, and the three orgs you named (Undergraduate Investment Group,
International Business Association, Global Markets Group). Send roles and dates and
they go in. The orgs that *are* on your résumé — Noles on Wall Street, Access
Distributed, Roark Capital Wall Street Club, the IBA Academy — are already in Section 4.

Employer names are set as text wordmarks rather than firm logos, since using a firm's
logo without permission is its own question.

---

## Deploying to GitHub Pages

Delete `COPY-DRAFT.md` first; it is an internal editorial document.

```bash
git init -b main
git add -A
git commit -m "Personal site"
gh repo create zacharybrown-site --public --source=. --push
```

Then turn Pages on:

```bash
gh api -X POST repos/:owner/zacharybrown-site/pages -f source[branch]=main -f source[path]=/
```

It publishes at `https://<your-username>.github.io/zacharybrown-site/` within a minute or
two. For a bare `https://<your-username>.github.io/`, name the repo
`<your-username>.github.io` instead.

`.nojekyll` is present so GitHub serves the files as-is rather than running them
through Jekyll.

### A custom domain, if you want one

Buy the domain, put it in a `CNAME` file at the repo root, then point DNS at GitHub:
four `A` records for the apex (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`)
or a `CNAME` to `<your-username>.github.io` for a `www` subdomain.

No analytics are installed. Say the word if you want them.
