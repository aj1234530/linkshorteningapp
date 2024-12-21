import React, { useState } from "react";
//this page has only form input (not interactivity)
function SignupPage() {
  // const [email,setEmail] = useState<null|string>(null);
  // const [password,setPassword] = useState<null|string>(null);
  return (
    <div className="outer">
      <div className="formContainer">
        <form>
          <div className="form-inputs">
            <label htmlFor="username-input">Username</label>{" "}
            <input
              className="input-box"
              id="username-input"
              placeholder="enter you username"
            ></input>
            <label htmlFor="email-input">Email</label>{" "}
            <input
              className="input-box"
              id="email-input"
              placeholder="enter you email"
            ></input>
            <label htmlFor="password-input">Password</label>
            <input
              className="input-box"
              id="password-input"
              placeholder="enter you email"
            ></input>
          </div>
        </form>
        <div className="remember-me-checkbox">
          <input type="checkbox"></input>
          <p>Remember me</p>
        </div>

        <button className="button-color">Submit</button>
      </div>
    </div>
  );
}
export default SignupPage;
