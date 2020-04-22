const INITIAL_STATE = {
  signedIn: false,
  id: null,
  name: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      const { name, id } = action.payload;
      return {
        signedIn: true,
        id,
        name,
      };
    }
    case '@auth/SIGN_IN_FAILURE': {
      return INITIAL_STATE;
    }
    case '@auth/SIGN_OUT': {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
}
