## Commands used in set up the projects

### Create React app

> npx create-react-app netflix-gpt

### Configure typescript

- Latest version is not yet compatible with the react 18 version. Installed the compatibled version

  > npm install -D typescript@4.9.5

- Installed Type Definitions for Dependencies

  > npm install -D @types/react @types/react-dom

- Initialize TypeScript Configuration. It will generate tsconfig.json file

  > npx tsc --init

- Change following compilerOptions in tsconfig.json file to support react

  - "jsx": "react"
  - "allowJs": true

- Rename Files

  - Convert App.js file to App.tsx and index.js to index.tsx

- Update Import Statements
  - Include react in each of the tsx file
    - import React from "react";
  - In index.tsx file, add the negation
    - const root = ReactDOM.createRoot(document.getElementById("root")!);

### Install Tailwind CSS

- Path -> https://tailwindcss.com/ > Get Started > Documentation > Framework Guides > Create React App

  > npm install -D tailwindcss

  > npx tailwindcss init

- The init command will generate tailwind.config.js. Edit the below content

  ```
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  ```

- index.css

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### Route

> npm install react-router-dom

## Firebase

For Authentication, Firebase is being used in this project

### Create project on Firebase and setup

- Open https://console.firebase.google.com/
  - Create a Project
    - Name of the project -> NetflixGPT
    - Use Google Analytics -> Y
  - Add an app to get started
    - Select Web </>
    - Register App Name -> NetflixGPT
    - Set up Firebase Hosting (Hosting app on Firebase for production) -> Y
    - Register app

### Add Firebase SDK on our project

- Install Firebase

  > npm install firebase

- Initialise Firebase - Add the config code onto a file (config/firebase.ts) which will be used for DB connection and other things

  ```
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "firebase/app";
      import { getAnalytics } from "firebase/analytics";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
      apiKey: "AIzaSyA_4w63IpgHeqpWMTFd6IPTAmIr8eoXdXc",
      authDomain: "netflixgpt-c1dd2.firebaseapp.com",
      projectId: "netflixgpt-c1dd2",
      storageBucket: "netflixgpt-c1dd2.appspot.com",
      messagingSenderId: "902951505592",
      appId: "1:902951505592:web:489d8de094280f21aa6e4d",
      measurementId: "G-Z9EXGBDGH6"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
  ```

### Install Firebase CLI

To host the site with Firebase Hosting, we need the Firebase CLI

> npm install -g firebase-tools

### Deploy to Firebase Hosting

- Login using the command promt

  > firebase login

- Initiate your project
  > firebase init
  - Now choose the options carefully
    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys - select
    - Use an existing project - select
    - Select the firebase project -> netflixgpt-c1dd2 (NetflixGPT)
    - What do you want to use as your public directory? -> build
    - Configure as a single-page app (rewrite all urls to /index.html)? -> N
    - Set up automatic builds and deploys with GitHub? -> N
    - Firebase initialization complete! -> firebase.json and .firebaserc will be generated

## App Deployment

- Before deployement build the project first. Check the command in package.json.

  > npm run build

  - This will create a build folder which is ready to be deployed.

- Now let's deploy the app
  > firebase deploy
  - Project Console: https://console.firebase.google.com/project/netflixgpt-c1dd2/overview
  - Hosting URL: https://netflixgpt-c1dd2.web.app

## Authentication

### Enable Authentication from Firebase

- Go to the site: https://console.firebase.google.com/
- Select the project -> NetflixGPT
- Authentication
- Select Sign-in methods
- Like Email/Password - Enable it

## Redux Toolkit

> npm install @reduxjs/toolkit

> npm install react-redux

## TMDB

- Used TMDB for fetching the movies
- Link: https://developer.themoviedb.org/reference/intro/getting-started

### Embed YouTube video

- Played Embed YouTube video

## TODO - Need to Expolre

- https://formik.org/
- zustand(Redux Alternative): https://zustand-demo.pmnd.rs/
