import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "./action";

const initState = {
  auth: false,
  token: "",
  error: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        auth: false,
        token: "",
        error: false,
      };
    case SIGNIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        auth: true,
        token: payload.token,
        error: false,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        auth: false,
        token: "",
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
