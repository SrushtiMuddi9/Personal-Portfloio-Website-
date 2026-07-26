# Srushti Muddi — Personal Portfolio Website

A responsive personal portfolio for Srushti Muddi (Frontend Developer), built with
HTML, CSS, and JavaScript. Showcases projects, technical skills, education,
certifications, and contact information, and is deployed with GitHub Pages.

**Live demo:** `https://srushti-muddi.github.io/portfolio-website/` (update after deploying)

## Features

- Responsive, mobile-friendly layout with a hamburger nav
- Dark / light theme toggle
- Sections: Home, About, Skills, Projects, Education, Certifications, Contact
- Smooth scrolling + active-link highlighting
- Front-end contact form (see notes below to wire it up for real email delivery)
- Real content pulled from the resume: bio, skills, projects, education, and certifications
- Resume download button wired to `assets/resume.pdf` (your uploaded resume is already in place)

## Tech Stack

- HTML5
- CSS3 (custom properties / theming, Flexbox, Grid)
- Vanilla JavaScript (ES6+)

## Project Structure

```
portfolio-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── profile-placeholder.svg
│   └── resume.pdf
└── README.md
```

## Before You Deploy — A Few Things to Check

Content (name, bio, skills, projects, education, certifications, email, phone, LinkedIn)
has been filled in from your resume. Only these need your attention:

- **GitHub username**: I used `srushti-muddi` as a placeholder in project links, the
  live-demo URL, and social links (I don't know your actual GitHub username) — find/replace
  it in `index.html` with your real one, and update project repo links once you've created
  those repos.
- **Profile photo**: `assets/profile-placeholder.svg` is a placeholder graphic — replace it
  with a real photo (e.g. `assets/profile.jpg`) and update the `<img>` tag in the About section.
- **Project repo links**: The Employee Management System, CNN leukemia detection, and
  Transformer NLP projects link to placeholder GitHub repo URLs — update once you've pushed
  that code, or remove the "Code" link for any project you haven't uploaded yet.
- Your resume (`assets/resume.pdf`) is already included and wired to the "Download Resume" button.

## Running Locally

No build step required — just open `index.html` in a browser, or serve it locally:

```bash
# Python 3
python -m http.server 8000

# Or with Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `portfolio-website`). Don't initialize it with a README (you already have one here).

2. **Initialize git and push this project** (run from inside the `portfolio-website` folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/srushti-muddi/portfolio-website.git
   git push -u origin main
   ```
   (Replace `srushti-muddi` with your actual GitHub username if different.)

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub → **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**
   - Choose branch **main** and folder **/ (root)**, then click **Save**
   - GitHub will publish your site at `https://srushti-muddi.github.io/portfolio-website/` within a minute or two

4. **Future updates** — just commit and push:
   ```bash
   git add .
   git commit -m "Update projects section"
   git push
   ```
   GitHub Pages automatically redeploys on every push to `main`.

## Making the Contact Form Actually Send Email

The form in `js/script.js` currently just shows a confirmation message (no backend).
Since GitHub Pages is static-only, wire it up with one of these free options:

- [Formspree](https://formspree.io/) — point the form's `action` to your Formspree endpoint
- [EmailJS](https://www.emailjs.com/) — send email directly from client-side JS
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — if you host on Netlify instead

## Related Project

This portfolio showcases a companion project, **Employee Records Management System**
(`../employee-records-demo`) — a Node.js/Express + MySQL REST API demonstrating
database design and CRUD operations. It runs separately (locally or on a Node host)
since GitHub Pages can't run a database or server.

## License

MIT — free to use and adapt.
