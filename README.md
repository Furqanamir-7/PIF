# Play It Forward

Nonprofit animal rescue website built with React, Tailwind CSS, React Router, Leaflet, and React Three Fiber.

## Run locally (required)

This is a Vite React app. **Do not open `index.html` directly in the browser.**

```bash
cd C:\Users\Dell\Desktop\play-it-forward
npm install
npm start
```

Then open: **http://localhost:5173**

## Production preview (local build)

```bash
npm run build
npm run preview
```

Then open: **http://localhost:4173**

## Deploy to Vercel

```bash
npx vercel pull --yes --environment production --scope furqans-projects-308696ed
npx vercel build --yes --prod
npx vercel deploy --prebuilt --prod --scope furqans-projects-308696ed --yes
```

Live URL: **https://play-it-forward-two.vercel.app**

## Pages

Home, Adopt, Events, Donate, Report a Rescue, About, Contact
