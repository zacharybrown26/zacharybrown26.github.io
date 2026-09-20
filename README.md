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
| 3 | **Where the desert photo is**, and the full-resolution original | Section 2, block 03 |
| 4 | London: what you actually noticed | Section 2, block 03 |
| 5 | One specific thing a Recalc member told you | Section 4 |
| 6 | Teammate sign-off on publishing the deck | Section 3 |
| 7 | A headshot | Hero |
| 8 | Captions for both photos | Sections 2 |

The desert image is 360×480, which is all I received. It is displayed at 352px wide so it
does not look soft. Send the original if you want it bigger.

If you have no headshot, say so and the desert photo moves to the hero.

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
