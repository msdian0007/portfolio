# Mohasin Mashak Attar - Portfolio

Welcome to my personal portfolio website! This website showcases my skills, projects, and experiences in web development.

## Live Website

You can visit the live version of my portfolio here: [Mohasin Mashak Attar - Portfolio](https://msdian0007.github.io/portfolio/)

## About

This portfolio highlights my journey as a web developer, showcasing the projects I have worked on, the skills I have acquired, and the experiences I have gained. It includes sections like:

- **About Me**: A brief introduction to who I am and my professional background.
- **Projects**: A showcase of some of the projects I have worked on, including descriptions, technologies used, and links to live demos or GitHub repositories.
- **Skills**: A list of the technologies, tools, and languages I am proficient in.
- **Experience**: An overview of my work experience, including the companies I have worked for and the roles I have held.
- **Contact**: Information on how to get in touch with me, including links to my LinkedIn, GitHub, and other social media profiles.

## Technologies Used

- **Vite**
- **React**
- **HTML5**
- **CSS3**
- **JavaScript**
- **emailjs**
- **GitHub Pages** (for hosting)

## How to View the Portfolio Locally

If you want to view the portfolio locally on your machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/msdian0007/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Deployment to GitHub Pages

Since this project is built using Vite, follow these steps to deploy updates to GitHub Pages:

1. **Install the `gh-pages` package:**
   Install it as a development dependency using npm:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Configure Vite:**
   Ensure your `vite.config.js` (or `vite.config.ts`) file includes the `base` path configured to your repository name. It should look like this:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/portfolio/', // This must match your GitHub repository name
     plugins: [react()],
   })
   ```

3. **Update `package.json` scripts:**
   Add the `predeploy` and `deploy` commands to your `scripts` object. Vite outputs the production build to the `dist` folder by default, so we point `gh-pages` there:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy the application:**
   Whenever you are ready to push updates to the live site, run:
   ```bash
   npm run deploy
   ```
   *This command will automatically build your project and push the `dist` folder to the `gh-pages` branch on GitHub.*

## Contributing

If you have suggestions or improvements for my portfolio, feel free to fork the repository and submit a pull request. Any contributions are welcome!

---

Thank you for visiting my portfolio website!