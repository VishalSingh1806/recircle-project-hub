# ReCircle Lab

Static-exported Next.js 14 portal for internal ReCircle tools.

## Setup

```bash
npm install
npm run build.
```

## Development

```bash
npm run dev
```

## Deployment

1. Run `npm run build`.
2. Deploy the generated `out/` directory to Firebase Hosting or a static bucket behind CDN on GCP.
3. Wire the existing GitHub repository to Cloud Build if automated deployments are required.
