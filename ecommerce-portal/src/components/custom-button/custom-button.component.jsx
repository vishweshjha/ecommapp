import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  inverted,
  isgoogleSignin,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isgoogleSignin ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
