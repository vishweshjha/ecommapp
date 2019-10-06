import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isgoogleSignin, ...otherProps }) => (
  <button
    className={`${
      isgoogleSignin ? "custom-button google-sign-in" : "custom-button"
    }`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
