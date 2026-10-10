# E-Cell IIT Patna — Website

Tagline: Empowering ideas, building founders, and creating opportunities at IIT Patna.

---

## Table of contents

- [Overview](#overview)
- [Key pages](#key-pages)
- [Tech stack](#tech-stack)
- [Installation and deployment guidelines](#installation-and-deployment-guidelines)
  - [Local development setup](#1-local-development-setup)
  - [Docker and Docker Compose setup](#2-docker-and-docker-compose-setup)
  - [Environment variables](#3-environment-variables)
- [Contributing guidelines](#contributing-guidelines)
- [License](#license)
- [Developers](#developers)
- [Screenshots and demo](#screenshots-and-demo)

---

## Overview

This repository contains the official website for the Entrepreneurship Cell at IIT Patna. The platform showcases the club's mission, initiatives, entrepreneurship culture, alumni network, flagship events, initiative highlights, and the student and founder ecosystem that E-Cell supports on campus.

The project is built as a Next.js application and includes a dedicated admin portal for internal operations such as announcements and website management workflows. The public-facing site is intended to help visitors understand the E-Cell ecosystem, discover opportunities, and connect with the team.

---

## Key pages

The current public website includes the following pages and sections:

- Home page with hero section, about section, standout features, achievements, speakers, and alumni
- Legacy page for the history and evolution of E-Cell
- Endeavours page for initiatives and entrepreneurial projects
- Team page showcasing the people behind the organisation
- Contact page for visitor inquiries and outreach
- Alumni registration page for alumni participation and engagement
- API routes for announcements, contact submissions, and event registration

The workspace also includes an admin portal for managing internal content and workflows.

---

## Tech stack

- Frontend: Next.js 16, React 19, TypeScript
- Styling: Tailwind CSS
- Motion and animation: GSAP, Framer Motion, Lenis
- Backend and APIs: Next.js API routes
- Database: MongoDB with Mongoose
- Background jobs: Redis with BullMQ
- Mail delivery: Nodemailer
- Containerisation: Docker and Docker Compose

---

## Installation and deployment guidelines

### 1. Local development setup

Navigate to the web app folder:

```bash
cd ecell
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Useful project commands from the app package include:

```bash
npm run build
npm run lint
npm run worker
npm run check-env
```

---

### 2. Docker and Docker Compose setup

The project includes a Docker Compose setup for running the web app and Redis together.

```bash
cd ecell

docker compose up -d --build
```

To view logs:

```bash
docker compose logs -f
```

To stop and remove the containers:

```bash
docker compose down
```

The application is served at:

👉 http://localhost:3000

---

### 3. Environment variables

Create a `.env.local` file inside the `ecell/` directory before running the app locally or in Docker. Do not commit this file to version control.

| Variable | Description | Example / placeholder |
| :--- | :--- | :--- |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://<username>:<password>@<cluster>.mongodb.net` |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_SECURE` | Whether the SMTP connection is secure | `false` |
| `SMTP_USER` | SMTP username or sender email | `example@gmail.com` |
| `SMTP_PASS` | SMTP app password or email password | `your-smtp-app-password` |
| `MAIL_FROM` | Display name and sender email used in outgoing mail | `E-Cell IIT Patna <example@gmail.com>` |
| `REDIS_HOST` | Redis host for the app | `redis` |
| `REDIS_PORT` | Redis port | `6379` |

The Docker setup defines `REDIS_HOST=redis` and `REDIS_PORT=6379`, while local development typically uses `localhost` for Redis unless otherwise configured.

---

## Contributing guidelines

1. Fork or clone the repository and work on a feature branch.
2. Keep changes focused and related to a single feature or fix.
3. Run the app locally before opening a pull request.
4. Validate that environment variables and API integrations still work in your branch.
5. Keep secrets out of the repository and use `.env.local` for local configuration.
6. Document any new environment variables or configuration changes in this README.

---

## License

No explicit license file has been added to this repository yet. Please confirm licensing and usage rights with the project maintainers before commercial use, redistribution, or public deployment outside the official E-Cell channels.

---

## Developers

This project is maintained by the E-Cell IIT Patna technical and design teams. The repository includes the public website and a supporting admin portal for internal management workflows.

---

## Screenshots and demo

- Desktop: To be added
- Mobile: To be added

---

## Checklist before launch

- Confirm all environment variables are set correctly
- Test the contact and registration APIs end-to-end
- Verify MongoDB and Redis connectivity in production-like conditions
- Run a production build with `npm run build`
- Validate all major pages: Home, Legacy, Endeavours, Team, Contact, and Alumni Registration
- Check the website on both desktop and mobile breakpoints before deployment

---
