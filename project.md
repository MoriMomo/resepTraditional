# Recipe App: Traditional Indonesian Cuisine

## Project Overview
The Recipe App is a full-stack web application celebrating traditional Indonesian cuisine from across the archipelago. From Rendang in West Sumatra to Soto Betawi in Jakarta, it offers authentic recipes, cultural insights, and cooking tips to explore Indonesia’s culinary heritage. Built with modern web technologies, the app is user-friendly, visually appealing, and accessible to food enthusiasts worldwide.

## Purpose and Goals
- **Cultural Preservation**: Showcase traditional Indonesian recipes to preserve culinary heritage.
- **User Engagement**: Allow users to discover, save, and share recipes, building a community around Indonesian food.
- **Education**: Provide step-by-step instructions, ingredient lists, and cultural context for beginners and experts.
- **Scalability**: Develop a robust, maintainable app that can grow with features like user accounts or recipe submissions.

## Tech Stack
The app uses a modern JavaScript framework for performance and developer experience:

- **Nuxt 4**:
  - A Vue.js-based framework for server-side rendered (SSR), static, or single-page applications (SPA).
  - Chosen for simplicity, automatic routing, and full-stack support with a Node.js server.
  - Features like file-based routing and composables enable rapid development.
- **Tailwind CSS**:
  - A utility-first CSS framework for styling.
  - Enables fast UI development with responsive design, colors, and spacing.
  - Supports culturally inspired designs (e.g., batik patterns or tropical colors).
- **Node.js and npm**:
  - Powers the backend and development environment.
  - Manages dependencies and runs the Nuxt 4 server.
- **Database (TBD)**:
  - Considering SQLite for development or PostgreSQL for production to store recipes and user data.
- **Hosting (TBD)**:
  - Exploring Vercel or Netlify for easy Nuxt 4 deployment and scaling.

## Key Features
1. **Recipe Catalog**:
   - Browse recipes from regions like Java, Sumatra, Bali, and Sulawesi.
   - Filter by region, difficulty, cooking time, or dietary preferences (e.g., halal, vegetarian).
2. **Recipe Details**:
   - Detailed pages with ingredients, instructions, cultural background, and serving tips.
   - Includes visuals like photos or videos.
3. **Search and Filter**:
   - Search by name, ingredient, or region.
   - Advanced filters for user preferences.
4. **User Interaction**:
   - Save favorite recipes (planned for user account integration).
   - Comment and rate recipes to engage the community.
5. **Cultural Insights**:
   - Each recipe includes its cultural significance, origin, and traditional methods.
   - Example: The history of Nasi Goreng or Sate’s role in festivals.
6. **Responsive Design**:
   - Fully responsive UI with Tailwind CSS for mobile, tablet, and desktop.
   - Uses Indonesian aesthetics like batik patterns or vibrant colors.

## Development Setup
The project is developed in `D:\pasti_berhasil\codee\big_projects\Recipe`. Setup steps:

1. **Initialize Nuxt 4 Project**:
   ```bash
   npx nuxi@latest init recipe-app
   cd recipe-app
   npm install
   npm run dev
   ```
   - Starts the development server at `http://localhost:3000`.

2. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
   - Configures Tailwind CSS in Nuxt.

3. **Project Structure**:
   - `pages/`: Vue components for routes (e.g., `index.vue` for home, `recipes/[id].vue` for details).
   - `components/`: Reusable UI components (e.g., `RecipeCard.vue`, `SearchBar.vue`).
   - `server/`: API routes (e.g., `/api/recipes`).
   - `assets/`: Static assets like images or CSS.
   - `public/`: Static files like favicon or images.

4. **Node.js and npm**:
   - Using Node.js `v20.17.0` (upgraded from `v20.15.1` for `npm@11.4.0` compatibility).
   - Updated dependencies:
     ```bash
     npm install -g npm-check-updates
     ncu -u
     npm install
     ```

## Current Status
- **Frontend**: Initial UI with Nuxt 4 and Tailwind CSS, including homepage, recipe list, and sample recipe page.
- **Backend**: Planning API endpoints, using mock data in `server/api/`.
- **Database**: Exploring SQLite or PostgreSQL.
- **Challenges**: Resolved npm compatibility issues by upgrading Node.js.

## Future Plans
- **User Accounts**: Add authentication (e.g., Firebase or Supabase) for favorites and submissions.
- **Recipe Submission**: Allow users to contribute recipes, moderated for quality.
- **Multilingual Support**: Include Bahasa Indonesia and English.
- **Mobile App**: Explore Capacitor for a mobile version.
- **Analytics**: Track popular recipes and user engagement.

## Why This Project Matters
Indonesia’s culinary diversity is a treasure, with each region offering unique flavors and stories. This app makes these recipes accessible globally while preserving their roots, blending tradition with modern technology.

## Getting Started
To run locally:
1. Navigate to `D:\pasti_berhasil\codee\big_projects\Recipe`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Contact
For feedback or contributions, contact the developer via [email or GitHub].

---
*Last Updated: May 16, 2025*