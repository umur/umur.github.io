# umur.github.io

Personal site for Umur Inan, served by GitHub Pages at `https://umur.github.io`.

> Custom domain note: `umurinan.com` currently points to **Cloudflare** (a
> different, already-live deployment), not GitHub Pages. The `CNAME` file was
> removed so this site stays reachable at `umur.github.io`. To move the domain
> here, repoint `umurinan.com` DNS at GitHub Pages and re-add a `CNAME` file.
> See the "Custom domain" section below.

## Structure

```
.
├── index.html          # home: about, books, research, links
├── style.css           # shared styling
├── CNAME               # custom domain (umurinan.com)
├── blog/
│   ├── index.html      # post list
│   └── hello-world.html# first post
└── README.md
```

## Local preview

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish

1. Create a GitHub repository named exactly `umur.github.io`.
2. Push this folder:

   ```bash
   git remote add origin git@github.com:umur/umur.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. The site goes live within a minute. A `username.github.io` repo serves automatically; no Pages source setting is required.

## Custom domain (umurinan.com)

The `CNAME` file tells GitHub Pages to serve the site at `umurinan.com`. You must
also point DNS at GitHub at your domain registrar.

For the apex domain (`umurinan.com`), create four `A` records and four `AAAA`
records pointing at GitHub Pages:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
```

For the `www` subdomain, add a `CNAME` record:

```
CNAME www   umur.github.io.
```

Then in the GitHub repo: Settings -> Pages -> Custom domain, confirm `umurinan.com`
is set, wait for the DNS check to pass, and enable "Enforce HTTPS".

> Verify these GitHub Pages IP addresses against the current GitHub docs before
> relying on them, as GitHub can change them:
> https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Adding a blog post

1. Copy `blog/hello-world.html` to `blog/your-slug.html` and edit the content.
2. Add a list item linking to it in `blog/index.html`.

When this grows tedious, migrate to Jekyll (natively supported by GitHub Pages)
so posts become Markdown files.
