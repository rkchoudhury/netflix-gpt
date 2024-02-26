import React from "react";

import GptSearchBar from "../../components/GptSearchBar";
import { BACK_GROUND_IMAGE_URL } from "../../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <GptSearchBar />
      </div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACK_GROUND_IMAGE_URL}
          alt="login_image"
        />
      </div>
    </div>
  );
};

export default GptSearch;
