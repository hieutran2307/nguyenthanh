export const POST_LOGIN = "POST_LOGIN";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const CHANGE_STATE_LOGIN_FORM = "CHANGE_STATE_LOGIN_FORM";

export const postLoginAction = input => {
  return {
    type: POST_LOGIN,
    input: input
  };
};
export const logoutAction = (input) => {
  return {
      type: LOGOUT,
      input: input
  }
}
export const changeStateLoginAction = (key, value) => {
  return {
    type: CHANGE_STATE_LOGIN_FORM,
    key: key,
    value: value
  };
};