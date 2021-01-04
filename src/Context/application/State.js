
import React, { useReducer } from "react";
import { STORE_AUTHENTICATED_USER } from "../types";
import Context from "./Context";
import Reducer from "./Reducer";

const State = (props) => {
  const initialState = {
    currentUser: null,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const storeAuthenticatedUser = (currentUserPayload) =>
    dispatch({ type: STORE_AUTHENTICATED_USER, payload: currentUserPayload });
  return (
    <Context.Provider
      value={{
        currentUser: state.currentUser,
        storeAuthenticatedUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
