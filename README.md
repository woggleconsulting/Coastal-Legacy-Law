# Coastal Legacy Law — Portal Theme Review

Interactive review of the ZPortals theme options, branded for Coastal Legacy Law. This repo publishes as a single static page via GitHub Pages so CLL can click through the options in a browser.

## Files
- `index.html` — the review page (self-contained: fonts/images are embedded; React loads from a CDN). This is the whole site.
- `.nojekyll` — tells GitHub Pages to serve the files as-is (skip Jekyll processing).
- `README.md` — this file.

## Publish it (GitHub web UI — no command line)
1. Go to https://github.com/new and create a repository, e.g. `cll-portal-themes`. Public is simplest (see the note below on privacy).
2. On the new repo page, click **uploading an existing file**, then drag in `index.html` and `.nojekyll` (enable "show hidden files" in your file picker if you don't see `.nojekyll`). Commit.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**. Set **Branch** to `main` and folder to `/ (root)`. Save.
5. Wait ~1 minute. The page will be live at:
   `https://<your-github-username>.github.io/cll-portal-themes/`
   Send that link to CLL.

## Publish it (git command line)
```bash
git init
git add index.html .nojekyll README.md
git commit -m "CLL portal theme review"
git branch -M main
git remote add origin https://github.com/<your-username>/cll-portal-themes.git
git push -u origin main
```
Then do steps 3–5 above (Settings → Pages).

## Notes
- **Browser:** needs a current Chrome, Edge, Firefox, or Safari (it uses the `DecompressionStream` API to unpack embedded assets) and an internet connection (React loads from a CDN). Fine for any up-to-date browser.
- **Privacy:** GitHub Pages on a free/public repo is reachable by anyone who has the URL. These are placeholder-data mockups, so that's usually fine — but if you'd rather keep it locked down, a **private repo with Pages requires a paid GitHub plan (Pro/Team/Enterprise)**. Alternatively, publish under an unguessable repo name and only share the link.
- **Updates:** when Claude Design produces a new version, replace `index.html` and commit — Pages redeploys automatically in about a minute.
- **Custom domain (optional):** you can point something like `review.woggleconsulting.com` at it in Settings → Pages → Custom domain.
