# RayoMD Website

Static product and API-validation website for [RayoMD](https://github.com/Butterski/rayomd). Everything needed to deploy the site is contained in this directory.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Copy the contents of this directory into the repository root.
3. Push to the `main` branch.
4. Open **Settings > Pages** and select **GitHub Actions** as the source if it is not selected automatically.
5. Run the `Deploy website to GitHub Pages` workflow or push another commit.

The workflow obtains the final Pages base URL from `actions/configure-pages`, builds into `_site/`, uploads the artifact, and deploys it. Canonical URLs, Open Graph URLs, `robots.txt`, `sitemap.xml`, `llms.txt`, and the API-request repository URL are replaced during the build. Project Pages subpaths such as `username.github.io/repository` are supported.

## Local preview

Node.js 20 or later and Python 3 are sufficient; there are no package dependencies.

```sh
npm run build
npm run serve
```

Open `http://localhost:4173`.

To test a production URL locally:

```sh
SITE_URL=https://example.com WEBSITE_REPO_URL=https://github.com/owner/repository npm run build
```

PowerShell:

```powershell
$env:SITE_URL='https://example.com'
$env:WEBSITE_REPO_URL='https://github.com/owner/repository'
npm run build
```

## Structure

```text
index.html                 Product home page
api/index.html             Hosted API beta preview and request form
privacy/index.html         Website and beta-flow privacy disclosure
assets/                    Styles, JavaScript, product media, and real samples
scripts/build.mjs          Dependency-free static build and URL replacement
.github/workflows/         GitHub Pages deployment
.github/ISSUE_TEMPLATE/    API beta issue form for repository visitors
robots.txt                 Visibility-first crawler rules
sitemap.xml                Indexable page list
llms.txt                   Concise product and scope reference
```

## API beta flow

The website has no form backend. The beta form constructs a prefilled issue URL in the visitor's browser and sends nothing until the visitor reviews and submits the issue on GitHub. The privacy page discloses that the resulting issue is public.

## SEO maintenance

- Keep the visible version, JSON-LD `softwareVersion`, sample files, and benchmark date synchronized with RayoMD releases.
- Keep every performance claim dated, scoped, and linked to its methodology.
- Add new indexable pages to `sitemap.xml` and `llms.txt`.
- Configure a custom domain in GitHub Pages settings when available; the workflow will then generate matching canonical URLs automatically.
- Add the deployed sitemap to Google Search Console and Bing Webmaster Tools after launch.
- Do not add FAQ, review, or pricing structured data unless the visible page and actual product support it.

## Content boundaries

The site deliberately does not claim full CommonMark, HTML/CSS fidelity, TeX math, PDF/A, PDF/UA, enterprise compliance, hosted API uptime, or general API availability. Keep those boundaries accurate as the product changes.
