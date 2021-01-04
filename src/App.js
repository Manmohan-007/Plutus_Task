import React, { useEffect, useContext } from "react";
import "./App.css";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./Container/LoginContainer/LoginContainer";
import AppContext from "./Context/application/Context";
import Home from "./Container/Home/Home";

function App() {
  const appContext = useContext(AppContext);

  useEffect(() => {
    const currentUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    appContext.storeAuthenticatedUser(currentUserInfo);
  }, []);

  return (

    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route
            exact
            path="/"
            render={() => appContext.currentUser !== null ? (
              <Redirect to="/home" />
            ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            exact
            path="/login"
            render={() =>
              appContext.currentUser !== null ? (
                <Redirect to="/home" />) :
                (<Login />)

            }
          />
          <Route
            exact
            path="/home"
            render={() =>
              appContext.currentUser !== null ? (
                <Home />) :
                <Redirect to="/" />

            }
          />


        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;
