//Controlador de descarga de albums

import Api from '../../services/Api';
import RequestDescription from '../../services/RequestDescription';

export default class ControllerAlbum {

    async downloadAlbums(addAlbum, setisLoading) {
        const request = await Api.getRequest(RequestDescription.getAlbum());
        let albums = Array();
        console.log(request)
        if (request.typeResponse == 1) {
            addAlbum(request.body)
            setisLoading(false)
        }
    }

}