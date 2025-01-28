# Classy Fronted Starter File

## Overview

This is a starter file for the forntend team that includes the packages that will be used also the fonts and the colors.

## Technologies Used

- React
- CSS
- Tailwind CSS
- JSON
- StoryBook
- Material UI
## Getting Started

### Step 1: Create the Vite app
```bash
npm create vite@latest classy --template react
```
#### Install Dependencies:
```bash
cd classy
npm install
```
#### Start the Development Server:
```bash
npm run dev
```
#### Access the Dashboard:
Open your web browser and navigate to http://localhost:5173.
#### Project Structure:
```bash
src/
  components/
   Feature_name/
    Feature_components.jsx
  assets/
    images
  pages/
    Feature_Page/
      Featrue_Page_Route
  App.jsx
  main.jsx
  index.CSS
  App.CSS
```
### Step 2: Install and configure Tailwind CSS
```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS configuration
npx tailwindcss init
```
### Step 3: Tailwind CSS Configuration
Update ```tailwind.config.js``` to include your custom colors, font family, and font sizes:
```/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#090b0e', // rgb(9, 11, 14)
        background: '#f8f9fa', // rgb(248, 249, 250)
        primary: '#6590ca', // rgb(101, 144, 202)
        secondary: '#c4acd0', // rgb(196, 172, 208)
        accent: '#b88eb5', // rgb(184, 142, 181)
      },
      fontSize: {
        sm: '0.750rem', // 12px
        base: '1rem', // 16px
        xl: '1.333rem', // 21.28px
        '2xl': '1.777rem', // 28.48px
        '3xl': '2.369rem', // 37.92px
        '4xl': '3.158rem', // 50.56px
        '5xl': '4.210rem', // 67.36px
      },
      fontFamily: {
        heading: ['Noto Sans JP', 'sans-serif'],
        body: ['Noto Sans JP', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
```
### Step 4: Add Tailwind to your CSS
In your ```src/index.css``` file, add the following:
```bash 
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

/* Tailwind CSS Directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Styles */
body {
  @apply font-body text-text bg-background;
}

h1, h2, h3, h4, h5 {
  @apply font-heading font-bold;
}

html {
  font-size: 100%; /* 16px */
}

h1 {
  font-size: 4.210rem; /* 67.36px */
}

h2 {
  font-size: 3.158rem; /* 50.56px */
}

h3 {
  font-size: 2.369rem; /* 37.92px */
}

h4 {
  font-size: 1.777rem; /* 28.48px */
}

h5 {
  font-size: 1.333rem; /* 21.28px */
}

small {
  font-size: 0.750rem; /* 12px */
}

```

### Step 5: Package Breakdown and installation

###### Routing & Navigation:
    react-router-dom: Declarative routing for React.
###### Icons & Graphics:

    react-icons: Popular icons as React components.
    react-kawaii: Cute illustrations for React.
###### UI Components:

    @mui/material: Material-UI component library.
    @emotion/react & @emotion/styled: Required for styling with Material-UI.
###### Styling:

    tailwindcss, postcss, autoprefixer: For utility-first CSS styling.
###### Utilities:

    react-share: Social media sharing buttons.
    sweetalert2: Beautiful, responsive, customizable alerts.
    Documentation & Linting:

###### eslint: 
    Linting tool for maintaining code quality.
###### storybook: 
    UI component explorer for frontend development.
###### react-styleguidist: 
    Isolated React component development environment.
-----
Note: Both Storybook and React Styleguidist serve similar purposes for component documentation and development. Depending on your preference, you might choose to use one over the other to avoid redundancy. For this guide, we'll set up Storybook.


-----
#### Install Dependencies:
```bash
# Install core dependencies
npm install react-router-dom react-icons react-kawaii react-share sweetalert2 @mui/material @emotion/react @emotion/styled

# Install development dependencies
npm install -D eslint storybook react-styleguidist
```

----
### Step 6 : Set Up Storybook
###### Storybook helps in developing UI components in isolation.
```bash # Initialize Storybook
npx sb init
```
###### After initialization, you can start Storybook using:
```bash # Initialize Storybook
npm run storybook
```
###### This will launch Storybook at: http://localhost:6006.
### Contributing:
Contributions are welcome! Please feel free to submit pull requests or open issues.
### License:
This project is licensed under the MIT License.

