
import AsyncStorage from "@react-native-community/async-storage";
import { ADD_PHOTO } from "./types";


export const addPhoto = (items, photo) => (dispatch) => {
  let dataPhotos = items.slice();
  dataPhotos = dataPhotos.concat(photo);
  console.log(dataPhotos, items)
  AsyncStorage.setItem("photos", JSON.stringify(dataPhotos));
  dispatch({ type: ADD_PHOTO, payload: { photos: dataPhotos } });
};