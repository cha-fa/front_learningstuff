import {
  LOAD_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_FAIL,
} from "../actionTypes";

const initialState = {
  token: null,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_USER:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.token,
        currentUser: action.user,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        currentUser: null,
      };
    case LOGOUT_FAIL:
    default:
      return state;
  }
};

export default authReducer;
