import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Unsubscribe, onAuthStateChanged } from "firebase/auth";

import { userSignOut } from "../screens/logIn/loginHelper";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { auth } from "../config/firebase";
import { ROUTE_NAMES } from "../navigation/Routes";
import { NETFLIX_LOGO, USER_AVATAR } from "../asserts";
import { toggleGptSearchView } from "../redux/slices/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/slices/configSlice";
import { IRootState } from "../model/RootState";

interface IProps {
  showSignOut?: boolean;
}

const Header = (props: IProps) => {
  const { showSignOut } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { showGptSearch } = useSelector((state: IRootState) => state.gpt);
  const { lang } = useSelector((state: IRootState) => state.config);

  useEffect(() => {
    /**
     * This is an event listener given by Firebase.
     * This will be called whenever there is an auth change. This will be called when user signIn, signUp or signOut
     * By this we don't have to handle of user data in different places. It can be handled in a central place like this
     *
     * Handled the navigation flow here. This will prevent the back and forth navigation between the Login and Browse screens.
     *
     * https://firebase.google.com/docs/reference/js/auth.user
     */
    const unSubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { email, photoURL, uid, displayName } = user;
        dispatch(addUser({ email, photoURL, uid, displayName }));
        navigate(ROUTE_NAMES.BROWSE);
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate(ROUTE_NAMES.HOME);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [dispatch, navigate]);

  const handleSigOut = () => {
    userSignOut();
  };

  const handleToggleGptView = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e: any) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full flex justify-between items-center bg-gradient-to-b from-black z-10">
      <div>
        <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      </div>
      {showSignOut && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="py-1 px-2 rounded-lg bg-gray-900 text-white"
              onChange={handleLanguageChange}
              value={lang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button
            onClick={handleToggleGptView}
            className="text-white font-semibold bg-amber-600 p-2 rounded-lg mx-6"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img src={USER_AVATAR} alt="logo" className="w-10 h-10 rounded-2xl" />
          <button
            onClick={handleSigOut}
            className="text-white font-semibold bg-red-700 p-2 rounded-lg mx-6"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
