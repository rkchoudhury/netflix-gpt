import React from "react";

const GptSearchBar = () => {
  return (
    <div className="mt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to search today?"
        />
        <button className="text-white font-semibold bg-red-700 p-4 m-4 rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
