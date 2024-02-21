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

- Change following compilerOptions to support react

  - "jsx": "react"
  - "allowJs": true

- Rename Files

  - Convert App.js file to App.tsx and index.js to index.tsx

- Update Import Statements
  - Include react in each of the tsx file
    - import React from "react";
  - In index.tsx file, add the negation
    - const root = ReactDOM.createRoot(document.getElementById("root")!);
