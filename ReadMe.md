# E-Cell IIT Patna — Website

Tagline: [INSERT SHORT TAGLINE HERE]

---

## Table of contents

- [Overview](#overview)
- [Key pages](#key-pages)
- [Tech Stack](#tech-stack)
- [Installation & Deployment Guidelines](#installation-and-deployment-guidelines)
  - [Local Development Setup](#1-local-development-setup)
  - [Docker & Docker Compose Setup (Recommended)](#2-docker--docker-compose-setup-recommended)
  - [Environment Variables](#3-environment-variables)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)
- [Developers](#developers)

---

## Overview


---

## Key pages


---


## Tech Stack

- **Frontend**: Next.js (TypeScript, TailwindCSS, GSAP, Framer Motion)
- **Backend / APIs**: Next.js Server Actions / API Routes
- **Database**: MongoDB (Mongoose)
- **Background Tasks**: Redis (BullMQ / tsx worker)

---

## Installation and Deployment Guidelines

### 1. Local Development Setup

Navigate to the `ecell` subfolder:
```bash
cd ecell
```

Install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### 2. Docker & Docker Compose Setup (Recommended)

To build and run the entire stack (Next.js web app and Redis) inside Docker:

```bash
# Navigate to the ecell directory
cd ecell

# Build and start the containers in the background
docker compose up -d --build

# View running logs
docker compose logs -f

# Stop and remove the containers
docker compose down
```

The web application will be accessible at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### 3. Environment Variables

To run the application (either locally or via Docker), create a `.env.local` file inside the `ecell/` directory.

> [!IMPORTANT]
> Never commit `.env.local` to version control.

Use the following configuration details:

| Variable | Description | Example / Placeholder |
| :--- | :--- | :--- |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://<username>:<password>@<cluster>.mongodb.net` |
| `SMTP_HOST` | SMTP server host address for emails | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_SECURE` | Secure SMTP connection (`true` or `false`) | `false` |
| `SMTP_USER` | SMTP username / Sender email address | `example@gmail.com` |
| `SMTP_PASS` | SMTP application password / Sender password | `your-smtp-app-password` |
| `MAIL_FROM` | Mail sender display name and email address | `E-Cell IIT Patna <example@gmail.com>` |
| `REDIS_HOST` | Redis server hostname (`redis` inside compose, `localhost` locally) | `redis` |
| `REDIS_PORT` | Redis server port number | `6379` |

---

## Contributing Guidelines


---

## License


---

## Developers


---

## Screenshots / Demo

- Desktop: 
- Mobile: 

---

## Checklist before launch


---
