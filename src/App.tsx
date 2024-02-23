import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import appRouter from "./navigation/AppNavigator";
import { auth } from "./config/firebase";
import { addUser, removeUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    /**
     * This is an event listener given by Firebase.
     * This will be called whenever there is an auth change. This will be called when user signIn, signUp or signOut
     * By this we don't have to handle of user data in different places. It can be handled in a central place like this
     *
     * https://firebase.google.com/docs/reference/js/auth.user
     */
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { email, photoURL, uid, displayName } = user;
        dispatch(addUser({ email, photoURL, uid, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
