const INITIAL_STATE = {
  signedIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      return { signedIn: true };
    }
    case '@auth/SIGN_IN_FAILURE': {
      return { signedIn: false };
    }
    case '@auth/SIGN_OUT': {
      return { signedIn: false };
    }
    default:
      return state;
  }
}
