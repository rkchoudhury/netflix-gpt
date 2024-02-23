import React from "react";
import { useNavigate } from "react-router-dom";

import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { userSignOut } from "../screens/logIn/loginHelper";

interface IProps {
  showSignOut?: boolean;
}

const Header = (props: IProps) => {
  const { showSignOut } = props;

  const navigate = useNavigate();

  const handleSigOut = () => {
    userSignOut(navigate);
  };

  return (
    <div className="absolute w-full flex justify-between items-center bg-gradient-to-b from-black z-10">
      <div>
        <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      </div>
      {showSignOut && (
        <div className="flex">
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
