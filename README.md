# Reformation Body Fitness — Official Website

> A modern, high-converting, mobile-first static website built for **Reformation Body Fitness** (Mohba Bazar, Raipur). Engineered for sub-second page loads, local search optimization (Google Maps Local SEO), and direct WhatsApp walk-in lead generation.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vaibhavdeshmukhdeveloper/rb-fitness)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Rating](https://img.shields.io/badge/Google%20Rating-4.9%20%E2%98%85-gold.svg)](https://maps.app.goo.gl/gWubvjJEzdBuVrG7A)

---

## 📍 About the Gym

* **Name:** Reformation Body Fitness
* **Location:** 2nd Floor, Hirapur Rd, beside Urban Biryani Restaurant, Sarvodaya Nagar, Mohba Bazar, Raipur, Chhattisgarh 492001
* **Contact / WhatsApp:** [099812 03459 / +91 99812 03459](tel:+919981203459)
* **Instagram:** [@reformation.body](https://www.instagram.com/reformation.body)
* **Google Maps:** [Open in Google Maps](https://maps.app.goo.gl/gWubvjJEzdBuVrG7A)
* **Operating Hours:**
  * **Morning Shift:** 06:00 AM – 11:00 AM (Mon – Sat)
  * **Evening Shift:** 05:00 PM – 10:00 PM (Mon – Sat)
  * **Sunday:** Closed (Rest & Recovery Day)

---

## ✨ Key Features

### 1. Interactive BMI & Calorie Calculator
* Live interactive sliders for **Height (cm)** and **Weight (kg)** with real-time BMI categorization.
* Dynamic BMR & daily caloric calculation using the Mifflin-St Jeor formula.
* Goal-specific workout recommendation (*Fat Loss, Hypertrophy, Zumba, Functional HIIT, Yoga*).
* **1-Click WhatsApp Lead Forwarding:** Formats calculation results directly into a pre-filled WhatsApp message.

### 2. Live Shift & Operating Status Indicator
* Dynamically detects user time and renders real-time status badges:
  * `🟢 OPEN NOW (Morning Shift: 6–11 AM)`
  * `🟢 OPEN NOW (Evening Shift: 5–10 PM)`
  * `🟡 OPENS TODAY AT 5:00 PM (Evening Shift)`
  * `🔴 CLOSED FOR THE NIGHT (Opens 6:00 AM)`
  * `🔴 CLOSED TODAY (Sunday Rest & Recovery — Opens Monday at 6:00 AM)`

### 3. VIP Free 1-Day Trial Pass Voucher Generator
* Interactive popup modal generating random VIP voucher passcodes (`RB-VIP-XXXX`).
* Pre-selects shifts and fitness interests, formatting a verified pass sent directly to the reception WhatsApp.

### 4. Programs & Disciplines Matrix
* Strength & Heavy Hypertrophy
* Zumba & Dance Aerobics
* Functional HIIT & Turf Conditioning
* 1-on-1 Certified Personal Coaching & Indian Macro Diet Plans

### 5. Local SEO & Structured Data
* Full `schema.org/ExerciseGym` JSON-LD structured data for Google local search and Local 3-Pack ranking.
* Semantic HTML5 tags and OpenGraph social metadata.

### 6. Design System & Aesthetics
* Dark Obsidian palette (`#07080b`) with energetic crimson (`#ff2a5f`) and amber gold accents.
* Frosted glassmorphism (`backdrop-filter: blur()`).
* Zero external CSS/JS framework dependencies for instant loading on 4G/5G mobile devices.

---

## 📁 Repository Structure

```
rb-fitness/
├── assets/
│   └── images/
│       ├── hero.jpg         # Hero background (strength gym floor)
│       ├── zumba.jpg        # Zumba dance aerobics studio
│       ├── trainer.jpg      # 1-on-1 personal training coaching
│       └── cardio.jpg       # Functional HIIT & turf conditioning
├── index.html               # Main semantic HTML structure & SEO Schema
├── styles.css               # Vanilla CSS design system & responsive layout
├── script.js                # Interactive logic (BMI, status, modals, WhatsApp)
├── netlify.toml             # Netlify caching, headers, and security policies
├── SKILLS.md                # Technical skills, guidelines & architectural standards
├── .gitignore               # Git ignored files
└── README.md                # Documentation & project overview
```

---

## 🛠️ Local Development

Clone the repository and start any static HTTP server:

```bash
# Clone repository
git clone https://github.com/vaibhavdeshmukhdeveloper/rb-fitness.git
cd rb-fitness

# Run with Python
python -m http.server 3000

# Or run with Node.js
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

### Deploy to Netlify (Recommended)
1. Link your GitHub repository in [Netlify](https://app.netlify.com).
2. Set build command to blank and publish directory to `.`.
3. Auto-deploys on every `git push`.

### Deploy to GitHub Pages
1. Go to **Repository Settings &rarr; Pages**.
2. Set Source to `Deploy from a branch` &rarr; `master` branch / `/ (root)`.
3. Save to publish.

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
