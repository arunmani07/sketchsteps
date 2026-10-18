# SketchSteps — Free browser-based drawing studio

SketchSteps is an original, responsive drawing-study website inspired by step-by-step drawing apps. It works without an API key, account, backend, or paid service.

## What works for free

- Upload a JPG, PNG, or WebP photo (up to 10 MB) or try the built-in sample eye illustration.
- Create nine progressively adjusted visual treatments in the browser using the Canvas API.
- Choose Pencil Sketch, Black Ink, or Ink & Watercolor-style effects.
- Toggle a grid, overlay the original reference with adjustable opacity, and move between stages.
- Download individual stages and the final image.
- Keep recent studies in local browser storage on the device.
- Responsive layout for phones, tablets, and desktop.

**Important limitation:** These are browser-based visual effects applied to the uploaded image. They do not use AI and do not create semantically accurate, hand-authored construction stages. The nine panels represent increasing image treatments, not guaranteed drawing instructions. Genuine AI-generated step-by-step decomposition would require an AI service and may incur usage charges.

## Requirements

- Node.js 20 or newer for local development.
- No API key, backend, or paid service required for the features above.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Deploy free on GitHub Pages

1. Create a GitHub repository named `sketchsteps` (or adjust `base` in `frontend/vite.config.js` to match your repository name).
2. Upload the project files and push them to the `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the deployment source.
4. The included `.github/workflows/deploy-pages.yml` workflow builds `frontend/` and publishes the `frontend/dist` folder automatically after a push to `main`.
5. Your site will be available at `https://YOUR_USERNAME.github.io/sketchsteps/` after the workflow succeeds.

For a user/organization site repository named `YOUR_USERNAME.github.io`, set `base: '/'` in `frontend/vite.config.js`.

## Privacy and costs

- Photo processing happens locally in the browser. The app does not upload the photo to a server.
- Recent study previews are saved in this browser's `localStorage`. They do not sync between devices. Clearing site data removes them.
- GitHub Pages hosting for an eligible public repository is free.
- AI image generation, cloud sync, user accounts, and hosted backend features are **not included**. Those would require additional services and could cost money.
