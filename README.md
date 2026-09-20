# Zachary Brown — personal site

Single-page static site for the Recalc Finance Accelerator application. Plain HTML, one
stylesheet, ~45 lines of vanilla JS. No build step, no dependencies, no tracking.

```
index.html
assets/
  css/style.css
  js/main.js
  img/    soccer-keeper.jpg · desert.jpg   (headshot still missing)
  docs/   zachary-brown-resume.pdf · project-alpha-deck.pdf
```

## Deadline

Applications close **27 September 2026**. Priority review closed **20 September**.
The website is a required deliverable, submitted alongside the résumé and a short written
reflection on where AI helped. See `APPLICATION-REFLECTION.md` for a draft of that.

## Preview it

```bash
python3 -m http.server 8000 -d "/Users/zachbrown/Desktop/Recalc Website"
```

Then open <http://localhost:8000>.

---

## What Recalc actually scores

From their own materials: **effort, clarity, curiosity, judgment, and authentic
communication.** Not credential volume. Three consequences for this site:

1. **The goalkeeper section is the most valuable thing on the page**, because it shows an
   original investing idea rather than a list. Protect it.
2. **Your résumé can read as someone who already has access.** Recalc exists partly for
   students at schools without on-campus recruiting. Section 4 handles this by naming what
   you are actually missing rather than listing what you have.
3. **TCW Private Credit is one of their partner firms.** Two of your four seats are credit
   seats. That is the most specific hook you have and it is in Section 4.

Program facts used on the page, all from Recalc's published materials: Katie Fifer (Audax
Group, Paxion Capital) and Suzanne Corley (J.P. Morgan) teach it; seven live Tuesday
sessions from October to mid-December plus recruiting prep in late December and January;
curriculum runs accounting fundamentals, business analysis, then LBO modeling; attendance,
Slack engagement, and follow-through on introductions are mandatory; partner firms include
Audax, Charlesbank, Integrum, Silversmith, Spectrum Equity, TCW Private Credit, and TSG
Consumer Partners; the program is free.

---

## Still unfinished

Each one renders as a yellow dashed block in the page, so none can ship by accident.
Search `index.html` for `NEEDS ZACH`.

| # | What's missing | Where |
|---|---|---|
| 1 | Goalkeeping: UPSL club, the All-Conference season, one goal you still think about | Section 2, block 01 |
| 2 | Jiu-jitsu: when you started, gym, belt, one roll you lost | Section 2, block 02 |
| 3 | What Morocco and London actually changed for you | Section 2, block 03 |
| 4 | One real sentence from your friend in the program | Section 4 |
| 5 | Teammate sign-off on publishing the Project Alpha deck | Section 3 |
| 6 | A clean PDF export of the **updated** Project Alpha deck | Section 3 |
| 7 | A caption for the goalkeeper photo | Section 2, block 01 |

Photos are all in: headshot, goalkeeper, Sahara. The headshot is 360×450 and the Morocco
shot 360×480, both displayed at roughly native size so neither looks soft. Send originals
if you want them larger.

### The two decks you sent

**`AlphaPalmetto_Deck_vF_updated.pptx`** could not be converted here; PowerPoint automation
is blocked in this environment. The link on the site is still the **older** deck. To fix it:
open the pptx, **delete slide 2** (the team contact page, which carries all four of your
phone numbers and emails), then File › Save As › PDF and send it over.

**`IRDM_vF.pdf` is not usable.** It is a single-page screen capture of the PowerPoint
window, app toolbar and all, not a slide export. The 27-slide deck is in there but the file
shows one slide surrounded by menus. Export it properly and it can be linked. Note that it
is also team work: Matthew Kempinski, Mazen Sadat, Kaylee Quinter, Tyler Egolf, and you.
The site now credits the Media & Telecom team rather than implying you did it alone.

---

## Facts on the page, and where they came from

Everything factual comes from your résumé or the Project Alpha deck, except three things
you told me directly that are **not** on your résumé: AP Scholar, UPSL semi-professional
soccer, and eight weeks in FSU's London program.

Left off deliberately: **LDR Partners** and the three orgs you named (Undergraduate
Investment Group, International Business Association, Global Markets Group). None are on
your résumé and I had no titles or dates. Send them and they go in.

No graduation year appears anywhere, per your instruction.

Employer names are text wordmarks, not firm logos.

### The deck

The linked copy is 48 pages, not 49. Page 2 of the original was the Palmetto Partners team
page carrying Gem Granofsky's, Ross Kantor's, and Lucas Vaca Narvaja's FSU emails and
personal phone numbers. Verified that no contact data survives in the published file. The
table of contents page numbers are now off by one.

### The résumé

The linked PDF carries your phone number and personal email, and a public GitHub Pages site
is crawlable. Delete the `contact__aux` paragraph in `index.html` if you would rather not.

---

## Accessibility

Verified rather than assumed:

- **Colour contrast passes WCAG AA in both light and dark themes**, measured across every
  distinct foreground/background/size combination on the page. The muted grey was darkened
  from `#6b7c93` to `#5a6b80` to clear 4.5:1; the large section numerals are decorative and
  `aria-hidden`, and use a separate `--ink-faint` token.
- No horizontal scroll at 375px. No skipped heading levels. `lang` set.
- All three images carry descriptive alt text.
- Skip link is the first focusable element.
- `prefers-reduced-motion` disables all animation and smooth scrolling.

### The scroll reveal is CSS-only, on purpose

It was an IntersectionObserver first, and that had a bug worth recording. Browsers coalesce
observer callbacks during fast scrolling, so elements cross the viewport without ever being
announced and stay at opacity 0 permanently. Dragging the scrollbar or pressing End left 12
of 17 blocks invisible, including the whole Recalc section and the closing ask. On a job
application, a reviewer who scrolls quickly would have seen blank pages.

Adding a scroll-listener fallback did not fix it, because some embedded contexts never fire
scroll events at all.

It now runs on a CSS view timeline, which cannot miss: progress is a function of where the
element sits in the scrollport, not of an event arriving. And the whole thing is wrapped in
`@supports (animation-timeline: view())`, so a browser that cannot animate it never hides
the content in the first place. **No JavaScript controls visibility anywhere on this site.**
If `main.js` fails to load you lose a live copyright year and a fading header, nothing more.

Verified by sampling 21 scroll positions plus deliberately brutal scroll patterns: zero
blocks invisible, in both themes and at 375px.

## Deploying

`COPY-DRAFT.md` and `APPLICATION-REFLECTION.md` are internal and already gitignored.

```bash
cd "/Users/zachbrown/Desktop/Recalc Website"
gh repo create zacharybrown-site --public --source=. --push
gh api -X POST repos/:owner/zacharybrown-site/pages -f source[branch]=main -f source[path]=/
```

Publishes at `https://<username>.github.io/zacharybrown-site/` in a minute or two. For a
bare `https://<username>.github.io/`, name the repo `<username>.github.io` instead.
`.nojekyll` is present so the files are served as-is.

For a custom domain: buy it, add a `CNAME` file at the repo root, then point DNS at GitHub
with four apex `A` records (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) or a
`CNAME` to `<username>.github.io` for a `www` subdomain.
