# React Native skill-test by Pablo Larios

Aqui muestro mi app hecha en react-native utilizando componentes con hooks, redux, asyc-storage, react-navigation entre otros.
No los anime como quisiera por el tiempo que me fui corto, pero espero les guste :)

## Pasos para correr el proyecto

- Necesitaremos contar con el cli de React-Native, si no lo tienes te dejo la liga [react-native doc](https://reactnative.dev/docs/environment-setup)
- Ubicarnos dentro de la raíz del proyecto y ejecutar:
    - yarn
- Si queremos correr en ios( necesitamos una mac )
    -   En la raiz del proyecto ejecutar:
        - cd ios && pod install & cd ..
    -   Abrir la ultima versión de xcode
    -   Abrir nuestro TestBankaya.xcworkspace ubicado en TestBankaya/ios/
    -   Dentro de xcode ejecutar play y listo
- Si queremos correr en android
    -   Abrir la ultima version de Android Studio
    -   Abrir projecto android ( abrir la carpeta android que se encuentra en TestBankaya/android) desde la opcion "Open an exist project
    -   Esperar a que termine el build.
    -   Ejecturar run app

## Como usar la galeria

- Home:
    -   Aquí veremos un listado de albumnes( si no hay descargados se comenzaran a descargar).
    -   Al hacer click en uno de ellos se llevara a la vista de listado de fotos de ese album .
- Listado de fotos:
    -   aquí veremos un listado de de fotos( si no hay descargados se comenzaran a descargar).
    -   Si dejamos presionado en una foto nos aparece una preview de la foto a ver, si presionamos la fotos nos llevara a la vista de su detalle, si presionamos por fuera se cerrara el modal.
    -   Si presionamos de una manera normal en una foto esta nos llevara a la vista detalle .
- Vista detalle:
    -   Aquí veremos la imagen, su nombre así como su fecha de descarga.

#### Ahora si los dejo con mi test, gracias por si atención.