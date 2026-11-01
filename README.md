# Paradise Entertainment of NW FL LLC — Company Website

A finished, responsive static company website built for **Paradise Entertainment of NW FL LLC**, Florida document number **L25000498276**. Includes:

- `index.html` — company overview with entertainment and digital initiative sections
- `migraine-sitrep.html` — factual development-stage app project page
- `privacy.html` — current website privacy and development-stage app data handling overview
- `contact.html` — company information and email link once configured
- `assets/` — self-contained CSS, JS and SVG icon; no third-party font requests

## Important: before going live

1. Purchase a domain **actually owned by Paradise Entertainment of NW FL LLC**, such as a domain related to the legal entity name. **No domain is assumed to be available or purchased.**
2. Create a working company email using this domain, e.g. `contact@your-actual-domain.com`.
3. Open `assets/config.js` in Notepad, set `contactEmail` to that real activated address, and save. The contact page automatically shows the mailto link.
4. Verify all business descriptions against actual company activities. Do not claim an operating venue, released medical product or clinical certifications unless those are true.
5. Review the Privacy page before publishing. It correctly describes the current site and prototype, but the app needs a finalized privacy policy before public App Store release.

## Preview on Windows

Double-click `index.html` to open in a browser. All website assets and internal links work offline.

## Publish via GitHub Pages (Free)

**Keep the source-code repo `Migraine-SITREP` PRIVATE.** Create a separate **PUBLIC** repository for this company website, such as `paradise-entertainment-website`.

1. Sign into GitHub Desktop and choose **File → New Repository**. Name it `paradise-entertainment-website`. Choose a folder under Documents/GitHub. Create repository.
2. Extract this ZIP, and copy its *contents* (`index.html`, `assets`, etc.) to the repository root, alongside `.git` (leave `.git` alone).
3. In GitHub Desktop, commit and **Publish repository**; for GitHub Free, make the WEBSITE repository PUBLIC. This publishes these website files, *not* the private app code.
4. On GitHub.com open the website repo → **Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save**.
5. Once deployed, the temporary URL will usually be `https://<your-GitHub-username>.github.io/paradise-entertainment-website/`. Check the actual GitHub Pages status for the exact URL.
6. In **Settings → Pages**, set your purchased custom domain and follow GitHub's DNS instructions at your registrar. Enable HTTPS after DNS validation. You may use `www` or an apex domain; choose records that match the official documentation.
7. Verify a functional custom-domain URL and a mailbox that matches it before submitting Apple's organization enrollment.

GitHub Pages documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site and https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Apple enrollment rules: https://developer.apple.com/help/account/membership/program-enrollment

## Notes

- Don't upload customer records, Apple signing credentials, medical records, or personal contact details to the public website repo.
- The GitHub Pages host logs IP addresses for security even though this site has no visitor analytics, forms, or site-owned trackers.
- GitHub Pages static hosting does **not** create an email inbox. Use a domain/email provider for that.
- This website alone does not guarantee Apple Developer verification; Apple separately verifies entity, domain, email, D-U-N-S and authority.
- A real private preview works by opening `index.html` locally, without publishing.
