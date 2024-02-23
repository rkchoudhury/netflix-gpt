import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LogIn from "../screens/logIn/LogIn";
import Browse from "../screens/browse/Browse";
import { ROUTE_NAMES } from "./Routes";

const appRouter = createBrowserRouter([
  {
    path: ROUTE_NAMES.HOME,
    element: <LogIn />,
  },
  {
    path: ROUTE_NAMES.BROWSE,
    element: <Browse />,
  },
]);

export default appRouter;
