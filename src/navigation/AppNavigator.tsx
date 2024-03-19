import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LogIn from "../screens/logIn/LogIn";
import Browse from "../screens/browse/Browse";
import Error from "../screens/error/Error";
import { ROUTE_NAMES } from "./Routes";
import Watch from "../screens/watch/Watch";

const appRouter = createBrowserRouter([
  {
    path: ROUTE_NAMES.HOME,
    element: <LogIn />,
    errorElement: <Error />,
  },
  {
    path: ROUTE_NAMES.BROWSE,
    element: <Browse />,
    errorElement: <Error />,
  },
  {
    path: ROUTE_NAMES.WATCH,
    element: <Watch />,
    errorElement: <Error />,
  },
]);

export default appRouter;
