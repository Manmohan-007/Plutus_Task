import React, { useContext } from "react";
import Login from "../../Components/Login/Login";
import AppContext from "../../Context/application/Context";
import Axios from 'axios';

/*
 alert, loader, LoginComponent
 */

const LoginContainer = (props) => {


  const appContext = useContext(AppContext);

  const loginHandler = (creds,) => {
    Axios
      .post("https://reqres.in/api/login", creds)
      .then((resp) => {
        console.log(resp)
        appContext.storeAuthenticatedUser({
          token: resp.data,
        });

      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("Credentials not valid")
        }
      });

  };

  return (
    <div>
      <Login loginHandler={loginHandler} />
    </div>
  );
};

export default LoginContainer;
