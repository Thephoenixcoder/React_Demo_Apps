const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: "LoginFailed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("Log out successful");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup successful");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_FAILED":
      console.log("SIGNUP FAILED ");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
