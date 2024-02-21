## Commands used in set up the projects

### Create React app

> npx create-react-app netflix-gpt

### Configure typescript

- Latest version is not yet compatible with the react 18 version. Installed the compatibled version

  > npm install -D typescript@4.9.5

- Installed peer dependencies

  > npm install -D @types/react @types/react-dom

- Initialise typescript in the project. It will generate tsconfig.json file

  > npx tsc --init

- Change following compilerOptions to support react
  -"jsx": "react"
  -"allowJs": true

- Convert App.js file to App.tsx and index.js to index.tsx
  - Include react in each of the tsx file
    - import React from "react";
  - In index.tsx file, add the negation
    - const root = ReactDOM.createRoot(document.getElementById("root")!);
