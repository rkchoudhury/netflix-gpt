import React from "react";
import { useSelector } from "react-redux";

import { lang } from "../utils/languageConstants";
import { IRootState } from "../model/RootState";

const GptSearchBar = () => {
  const { lang: langKey } = useSelector((state: IRootState) => state.config);
  return (
    <div className="mt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-white font-semibold bg-red-700 p-4 m-4 rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
