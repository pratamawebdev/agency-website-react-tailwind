import React from "react";

const Button = (props) => {
  const { classname, type, children } = props;
  return (
    <button
      className={`bg bg-brandPrimary text-white rounded transition-all duration-300 hover:bg-neutralDGrey ${classname}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
