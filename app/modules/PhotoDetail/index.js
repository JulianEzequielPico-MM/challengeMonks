// View: Detail of image
// Developer: Pablo Larios 
import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import moment from 'moment'

//import headerTitle
import HeaderBar from '../../components/headerBar'

//import components
import UIModalPhotoBig from './components/UIModalPhotoBig';

//import styles
const styles = require('./styles').styles;

const PhotoDetail = ({ route }) =>{

    const [isShowModal , setIsShowModal] = useState(false);

    const { selectImage } = route.params;
    console.log(selectImage)

    function showModal(flag){
        setIsShowModal(flag)
    }

    function convertDateToString(){
        return moment(new Date(selectImage.date)).format('DD/MM/YYYY hh:mm:ss');
    }

    return(
        <View style={styles.container}>
            <HeaderBar title={selectImage.name ? selectImage.name : ""}/>
            <View style={styles.containerList}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: selectImage.path }}
                        resizeMode={"cover"}
                    />
                </View>
                <View style={styles.containerDate}>
                    <Text style={styles.textDate}>{convertDateToString()}</Text>
                </View>
                <View style={styles.containerDate}>
                    <Text style={styles.textDate}>Image</Text>
                </View>
            </View>
            {
                isShowModal ?
                    <UIModalPhotoBig 
                        showModal={showModal} 
                    />
                :
                    null
            }
        </View>
    )
}

export default PhotoDetail