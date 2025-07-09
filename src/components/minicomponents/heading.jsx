import React from "react";

const heading = ({ className, headingText }) => {
  return <div className={`${className}`}>{headingText}</div>;
};

export default heading;
