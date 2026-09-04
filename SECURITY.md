# Security

## Reporting
Email company@everjust.org.

## 2026-09-04 — two credentials were removed from this repository

This repository is public and is served by GitHub Pages at https://ustnexus.club, so anything
committed here is world-readable, including files a browser downloads.

Two live credentials were found and removed:

1. **Airtable personal access token**, hardcoded in `buildfest/script.js`. Because that file is
   client-side JavaScript, every visitor to https://ustnexus.club/buildfest/ downloaded it. It could
   read 76 registration records containing name, email, role and school.
2. **Render API bearer token**, in `nodebb-setup.md`. The Render API can create, modify and delete
   services and read their environment variables.

Both have been revoked. Removing a secret from a repository does not un-leak it — rotation is the fix.

## The rule this repository now follows
A browser cannot keep a secret. Any credential that reaches client-side JavaScript is public the
moment it ships. Form submissions that need an API key must go through a server-side proxy — a
Netlify or Cloudflare function that holds the key — or use a first-party embedded form.
