import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import { bg_URL } from "../utils/constants";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={bg_URL} alt="Netflix background" />
      </div>
      <GPTSearchBar />
      <GPTSuggestions />
    </>
  );
};

export default GPTSearchPage;
