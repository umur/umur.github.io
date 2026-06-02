# umur.github.io

Personal site for Umur Inan, served by GitHub Pages at https://umur.github.io.

## Local preview

Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish

1. Create a GitHub repository named exactly `umur.github.io`.
2. Push this folder to it:

   ```bash
   git remote add origin git@github.com:umur/umur.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. The site goes live at https://umur.github.io within a minute or two. No Pages setting is needed for a `username.github.io` repo: it serves automatically.

## Structure

- `index.html`: the page
- `style.css`: styling
