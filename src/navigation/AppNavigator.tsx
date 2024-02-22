import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LogIn from "../screens/logIn/LogIn";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/browse",
    element: <LogIn />,
  },
]);

export default appRouter;
