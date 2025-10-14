# Netlify Skew Protection Test Project

This project demonstrates the Netlify skew protection feature that adds `X-Netlify-Deploy-ID` headers to internal fetch requests in Astro.

**Live Demo:** https://skew-protection-test.netlify.app/

## What this tests

1. **Actions**: Client-side calls to Astro Actions include the deploy ID header
2. **View Transitions**: Navigation between pages includes the deploy ID header
3. **Server Islands**: (Not included in this demo, but supported)

## Setup

The project uses preview packages from PR #14543. Install them with:

```bash
npm i https://pkg.pr.new/astro@14543
npm i https://pkg.pr.new/@astrojs/netlify@14543
```

Or if the packages are already in package.json:

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Note: In local development, the deploy ID will show as "local-development" since there's no actual `DEPLOY_ID` environment variable.

## Deploy to Netlify

1. Create a new site on Netlify
2. Connect your repository or drag-and-drop the project folder
3. Netlify will automatically detect the Astro framework
4. Deploy!

## How to Verify

### On Netlify (after deployment):

1. Open your deployed site
2. Open browser Developer Tools (F12)
3. Go to the Network tab
4. Click the "Call Action" button
   - Look for the `POST /_actions/greet` request
   - Check the Request Headers for `X-Netlify-Deploy-ID`
5. Click the "other page" link
   - Look for the HTML fetch request
   - Check the Request Headers for `X-Netlify-Deploy-ID`

### What to expect:

- The `X-Netlify-Deploy-ID` header should appear in all internal fetch requests
- The value should match the current deployment ID
- This ensures that during deployments, clients always fetch resources from the same deployment version

## Files to Check

After building, you can verify the skew protection configuration:

1. `.netlify/v1/skew-protection.json` - Contains the skew protection configuration
2. Built JavaScript files - Will include the header injection code

## Preview Release

This project uses the preview release from PR #14543:

```json
{
  "astro": "^5.14.5-pr14543.20251014135916",
  "@astrojs/netlify": "^6.5.12-pr14543.20251014135916"
}
```

Update these to the latest snapshot versions as needed from the PR.
