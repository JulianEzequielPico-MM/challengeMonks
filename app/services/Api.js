import RNFetchBlob from 'rn-fetch-blob';

function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("promise timeout"))
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  })
}



/**
 * Componente para el llamado de los Servicios Web del sistema
 */
class Api {
  /**
   * obtiene la url de las variable de configuracion de cada proyecto Nativo. 
   */


  async getRequest(request) {
    console.log(request)
    try {
      let res = await timeoutPromise(5000, fetch( request.urlservice, {
        method: 'GET',
      }).then(res => res)
        .then(async res => {
          if (res.status == 200) {
            var responseJSON = await res.json();
            const response = { typeResponse: '1', body: responseJSON };
            return response;
          } else {
            if (responseJSON == '') {
              const response = { typeResponse: '2', body: res };
              return response
            } else {
              const response = { typeResponse: '1', body: responseJSON };
              return response
            }
          }
        })
        .catch(error => {
          const response = { typeResponse: '1', body: { systemCode: 500, systemCodeName: "NoContent", message: "Unauthorized" } };
          return response
        }));
      return res;
    } catch (error) {
      const response = { typeResponse: '1', body: { systemCode: -200, systemCodeName: "TimeOut", message: "TimeOut" } };
      return response;
    }
  }

  async downloadImage(image_URL){
    let date = new Date(); 
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: false,
        path:
          PictureDir +
          '/image_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2),
        description: 'Image',
      },
    };
    return new Promise(function (resolve, reject) {
      config(options)
        .fetch('GET', image_URL)
        .then(res => {
            resolve(res.data)
            return res.data;
        }).catch(err => {
            reject(false);
        })
    });
  };

}

export default new Api();