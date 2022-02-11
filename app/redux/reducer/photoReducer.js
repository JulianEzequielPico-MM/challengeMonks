import { ADD_PHOTO } from "../actions/types";

export default photosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...state, items: action.payload.photos };
    default:
      return state;
  }
}