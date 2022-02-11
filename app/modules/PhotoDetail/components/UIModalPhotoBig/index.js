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
*/

function UIModalPhotoBig ({imagePath, id, name, showModal}) {
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
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={{ uri: "https://scontent.fgdl1-4.fna.fbcdn.net/v/t1.6435-9/146945290_3544597292305824_8114328385499945604_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=2R8H_0Z6Jm8AX_MppiJ&tn=woVyyKGouit-mj1X&_nc_ht=scontent.fgdl1-4.fna&oh=00_AT8SsMkuooY9FUKjfWwr1UAiJNhi1QsdXTIe2WP2DvLZDQ&oe=622A6C40" }}
                            resizeMode={"cover"}
                        />
                    </View>
                </View>
            </Modal>
    )
}

export default UIModalPhotoBig;