import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photoReducer";

export default combineReducers({
  albums: albumsReducer,
  photos: photosReducer
});