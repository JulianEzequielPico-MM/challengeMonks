// Component: card of album
// Developer: Pablo Larios 

import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
}from 'react-native'

//import componentes
import UIModalPhotoBig from "../UIModalPhotoBig";

//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente tipo card de foto
   * @param {*} imagePath  //String
   * @param {*} id   //Int
   * @param {*} name   //String
   * @param {*} showModal   //Function
   * @param {*} changePage   //Function
*/

const CardAlbum = ({ imagePath, id, name, showModal, changePage, date}) => {
    const path = imagePath ? Platform.OS === "android" ? "file://"+imagePath : imagePath : "https://scontent.fgdl1-4.fna.fbcdn.net/v/t1.6435-9/146945290_3544597292305824_8114328385499945604_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=2R8H_0Z6Jm8AX_MppiJ&tn=woVyyKGouit-mj1X&_nc_ht=scontent.fgdl1-4.fna&oh=00_AT8SsMkuooY9FUKjfWwr1UAiJNhi1QsdXTIe2WP2DvLZDQ&oe=622A6C40";
    return (
        <TouchableOpacity 
            style={styles.container}
            onLongPress={()=>{
                showModal(true, {
                    imagePath: path, 
                    name: name, 
                    date: date
                })
            }}
            onPress={()=>{
                changePage({
                    name,
                    path,
                    date,
                    id
                })
            }}
        >
            <Image
                style={styles.image}
                source={{ uri: path}}
                resizeMode={"cover"}
            />

        </TouchableOpacity>
    )
}

export default CardAlbum;