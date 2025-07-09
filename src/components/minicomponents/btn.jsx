import React from "react";

const btn = ({ className, btnText }) => {
  return <button className={`${className}`}>{btnText}</button>;
};

export default btn;
