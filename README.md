# umur.github.io

Personal site for Umur Inan, hosted on GitHub Pages at https://umur.github.io.

## Develop

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Files

- `index.html` : the single-page card
- `style.css` : styling
- `images/` : profile photo
- `blog/` : blog index and posts

## Publish

Pushing to `main` redeploys automatically.

```bash
git push origin main
```

Auth is over HTTPS via the GitHub CLI (`gh auth login`), not SSH.

## Add a blog post

Copy `blog/hello-world.html` to `blog/<slug>.html`, edit it, and add a link in `blog/index.html`.

---

Note: `umurinan.com` is a separate deployment and does not point here.
