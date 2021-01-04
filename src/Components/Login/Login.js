import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import InputStyles from "./Styles"
const Login = (props) => {
  const Styles = InputStyles();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });

  };

  return (
    <>
      <div className={Styles.MainContainer}>
        <div className={Styles.LoginFormContainer}>
          <div className={Styles.LoginFormHeaderContainer}>
          </div>
          <div className={Styles.TitleContainer}>
            <h3>Login</h3>
          </div>
          <div className={Styles.LoginFormContent}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={creds.email}
              placeholder="Email here"
              onChange={changeHandler}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={creds.password}
              variant="outlined"
              placeholder="Password here"
              onChange={changeHandler}
              required
            />
            <Button
              onClick={() => {
                props.loginHandler(creds);
              }}
              variant="contained"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
