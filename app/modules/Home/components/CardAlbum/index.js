// Component: card of album
// Developer: Pablo Larios 

import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native'

//import styles
const styles = require("./styles").styles;

/**
   * Regresa componente tipo card del album
   * @param {*} id   //Int
   * @param {*} name   //String
   * @param {*} changePage   //Function
*/

const CardAlbum = ({ id, name, changePage }) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.containerBack} />    
            <View style={styles.containerBackLeft} />    
            <TouchableOpacity 
                 onPress={()=>{
                    changePage(id)
                }}
                style={styles.containerPrincipal}>
                    <Image
                        style={styles.image}
                        source={require('../../../../src/images/icon.jpg')}
                        resizeMode={"cover"}
                    />
                <Text 
                    numberOfLines={2}
                    style={styles.textName}>{name ? name.toUpperCase() : ""}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardAlbum;