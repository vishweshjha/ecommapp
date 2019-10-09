import React from "react";

import "./signin-signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";

const SigninSignup = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SigninSignup;
