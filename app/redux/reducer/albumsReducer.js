import { ADD_ALBUM } from "../actions/types";

export default albumsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return { ...state, items: action.payload.albums };
    default:
      return state;
  }
}