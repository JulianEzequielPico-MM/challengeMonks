//Controlador de descarga de albums

import Api from '../../services/Api';
import RequestDescription from '../../services/RequestDescription';

export default class ControllerPhotos {

    async downloadPhotos(albumId, addPhoto, photosNow) {
        const request = await Api.getRequest(RequestDescription.getPhotosByAlbumId(albumId));
        console.log(request)
        if (request.typeResponse == 1) {
            let photos = Array();
            photos = request.body;
            for(let i in photos){
                const url = await this.downloadPhoto(photos[i].url);
                photos[i].url = url 
                photos[i].date = new Date();
            }
            addPhoto(photosNow,photos)
            return(photos)
            // addPhoto(request.body)
        }else{
            return false
        }
    }

    async downloadPhoto(url) {
        const urlPhoto =  await Api.downloadImage(url);
        console.log(url, urlPhoto)
        return urlPhoto
    }

}