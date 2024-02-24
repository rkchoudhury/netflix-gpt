import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import appRouter from "./navigation/AppNavigator";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
