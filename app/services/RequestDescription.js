import ApiUrls from './ApiUrls';

/**
 * 
 * clase donde se definen las peticiones a los servicios
 */
export default class RequestDescription {
  constructor() {}

  /**************************************************************************************************************************************
   * BASE SERVICE
   **************************************************************************************************************************************


  /**
   * Obtiene las fotos a partir de  un AlbumId
   * @param {*} id
   */
  static getPhotosByAlbumId(id) {
    return {
      urlservice: ApiUrls.BASESERVICE + ApiUrls.GET_ALBUMS + "/" + id + ApiUrls.GET_PHOTOS
    };
  }

   /**
   * Obtiene los albums
   */
  static getAlbum() {
    return {
      urlservice: ApiUrls.BASESERVICE + ApiUrls.GET_ALBUMS 
    };
  }
}
