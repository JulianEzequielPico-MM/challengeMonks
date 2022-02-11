
import AsyncStorage from "@react-native-community/async-storage";
import { ADD_ALBUM } from "./types";


export const addAlbum = (items, album) => (dispatch) => {
  let dataPhotos = items.slice();
  dataPhotos = dataPhotos.concat(album);
  console.log(dataPhotos, items)
  AsyncStorage.setItem("albums", JSON.stringify(dataPhotos));
  dispatch({ type: ADD_ALBUM, payload: { albums: dataPhotos } });
};