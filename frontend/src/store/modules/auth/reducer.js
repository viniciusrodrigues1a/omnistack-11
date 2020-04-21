const INITIAL_STATE = {
  signedIn: false,
};

export default function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        state.signedIn = true;
        return state;
      }
      case '@auth/SIGN_IN_FAILURE': {
        state.signedIn = false;
        return state;
      }
      case '@auth/SIGN_OUT': {
        state.signedIn = false;
        return state;
      }
      default:
        return state;
    }
}
