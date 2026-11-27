# Motika Naveen — Developer Portfolio

Personal developer portfolio built with **React.js**, **Vite**, **JavaScript**, **CSS Modules**, and **Lucide React**.

## Features

- Dark developer theme with persistent Light/Dark mode toggle
- Responsive navigation bar with mobile menu drawer
- Data-driven sections (`Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, `Contact`, `Footer`)
- Zero paid dependencies or external APIs

## Project Structure

```text
portfolio/
├── public/                 # Place your resume.pdf here
├── src/
│   ├── assets/             # Static images/icons
│   ├── components/         # Reusable UI components (Navbar, Footer, ThemeToggle, SectionHeader)
│   ├── config/             # Site-wide settings (siteConfig.js)
│   ├── data/               # Editable portfolio content (profile, skills, experience, projects, education, navigation)
│   ├── sections/           # Page sections (Hero, About, Skills, Experience, Projects, Education, Contact)
│   ├── styles/             # Global CSS variables, base styles, and animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
└── package.json
```

## Updating Your Content

1. Open the files in `src/data/` and replace any `[PLACEHOLDER: ...]` text with your real details:
   - `src/data/profile.js` — Name, bio, email, location, GitHub, LinkedIn, resume filename
   - `src/data/skills.js` — Technical skills grouped by category
   - `src/data/experience.js` — Work history, responsibilities, and achievements
   - `src/data/projects.js` — Projects, highlights, tech stack, and links
   - `src/data/education.js` — Degrees and institutions
2. Add your actual resume PDF to `public/resume.pdf` so the **Download Resume** button downloads your file.

## Local Development (Windows PowerShell)

```powershell
cd c:\My_Projects\portfolio
npm install
npm run dev
```

Build for production:

```powershell
npm run build
npm run preview
```

## Deploy for Free on Vercel

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) with GitHub (Hobby Plan — free).
3. Click **Add New → Project**, select your repository, and click **Deploy** (Vite is auto-detected via `vercel.json`).
4. Future `git push` commits to your main branch automatically trigger new deployments.
