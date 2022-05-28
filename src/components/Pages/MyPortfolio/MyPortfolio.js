import React from "react";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

import Exercises from "./Exercises";

const MyPortfolio = () => {
  return (
    <div className="bg-gray-800">
      <ReactHelmet title="My Portfolio"></ReactHelmet>
      <Exercises />
    </div>
  );
};

export default MyPortfolio;
