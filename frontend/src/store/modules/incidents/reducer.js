const INITIAL_STATE = [];

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@incidents/CREATE_SUCCESS': {
      const { data } = action.payload;
      return [...state, data];
    }
    default:
      return state;
  }
}
