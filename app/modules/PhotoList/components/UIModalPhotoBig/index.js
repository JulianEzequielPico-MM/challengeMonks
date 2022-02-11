//modal to show photo big
//by: Pablo Larios
import React from 'react';
import {
    View,
    Modal,
    Image,
    TouchableOpacity
} from 'react-native'

const styles = require('./styles').styles;


/**
   * Regresa componente modal foto grande
   * @param {*} imagePath  //String
   * @param {*} id   //Int
   * @param {*} name   //String
   * @param {*} showModal   //Function
   * @param {*}  changePage //Function
*/

function UIModalPhotoBig ({imagePath, id, name, showModal, changePage, date}) {
    console.log(imagePath)
    return(
            <Modal
                animationType="slide"
                transparent={true}
            >
                <TouchableOpacity 
                    onPress={()=>{
                        showModal(false)
                    }}
                    style={styles.centered_view} 
                />
                <View style={styles.containerOver}>
                    <TouchableOpacity 
                        style={styles.container}
                        onPress={()=>{
                            changePage({
                                name,
                                imagePath,
                                date,
                                id
                            })
                        }}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: imagePath }}
                            resizeMode={"cover"}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>
    )
}

export default UIModalPhotoBig;