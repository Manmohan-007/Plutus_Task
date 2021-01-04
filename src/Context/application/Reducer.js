import { STORE_AUTHENTICATED_USER } from "../types";


export default (state, action) => {
  switch (action.type) {
    case STORE_AUTHENTICATED_USER:
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
