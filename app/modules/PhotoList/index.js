// View: PhotoList of album
// Developer: Pablo Larios 
import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

//import headerTitle
import HeaderBar from '../../components/headerBar'

//import components
import CardPhoto from './components/CardPhoto'
import UIModalPhotoBig from './components/UIModalPhotoBig';

// import to redux
import { connect } from "react-redux";
import { addPhoto } from '../../redux/actions/photosActions'
import ControllerPhotos from './ControllerPhotos';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay'

//import styles
const styles = require('./styles').styles;

const PhotoList = ({ navigation, photos, route, addPhoto }) =>{

    const [isShowModal , setIsShowModal] = useState(false);
    const [photosToShow , setPhotos] = useState(Array());
    const [selectImage , setSelectImage] = useState({});
    const [isLoading , setisLoading] = useState(true);


    useEffect(() => {
        init()
      }, []);

    async function init(){
        const { id } = route.params;
        if(!photos.items){
            const photoTem = await haveOffline()
            if(photoTem){
                addPhoto([], photoTem );
                filterById(id, photoTem)
            }else{
                downloadPhotos(id, [])
            }
        }else{
            filterById(id)
        }
    }

    async function haveOffline(){
        const photosTem = await AsyncStorage.getItem("photos")
        if(photosTem){
            return JSON.parse(photosTem)
        }
        return false
    }

    async function downloadPhotos(albumId, photosNow) {
        const controllerPhotos = new ControllerPhotos();
        const photosRequest = await controllerPhotos.downloadPhotos(albumId,addPhoto, photosNow);
        setisLoading(false)
        setPhotos(photosRequest)
    }

    async function filterById(albumId, photosStorage) {
        console.log(photos.items)
        if(photosStorage){
            const photoTem = await photosStorage.filter((photo)=> photo.albumId === albumId);
            if(photoTem.length){
                console.log(photosStorage)
                setisLoading(false)
                setPhotos(photoTem)
            }else{
                await downloadPhotos(albumId, photos.items)
            }
        }else{
            const photoTem = await photos.items.filter((photo)=> photo.albumId === albumId);
            if(photoTem.length){
                setisLoading(false)
                setPhotos(photoTem)
            }else{
                await downloadPhotos(albumId, photos.items)
            }
        }
    }

    function showModal(flag, imageSelect){
        setIsShowModal(flag);
        setSelectImage(imageSelect);
    }

    function changePage(selectImage){
        navigation.navigate("PhotoDetail",{
            selectImage: selectImage
        });
    }

    return(
        <View style={styles.container}>
            {
                isLoading &&
                    <Spinner
                        visible={true}
                    />
            }
            <HeaderBar title={"Galería"}/>
            <ScrollView>
                <View style={styles.containerList}>
                    {
                        photosToShow.length ?
                            photosToShow.map((photo)=>{
                                if(photo){
                                    return(
                                        <CardPhoto
                                            id={photo.id}
                                            key={photo.id}
                                            name={photo.title}
                                            date={photo.date}
                                            imagePath={photo.url}
                                            showModal={showModal}
                                            changePage={changePage}/>
                                    )
                                }
                            })
                        :
                            null
                    }
                </View>
            </ScrollView>
            {
                isShowModal ?
                    <UIModalPhotoBig 
                        showModal={showModal}
                        changePage={changePage} 
                        {...selectImage}
                    />
                :
                    null
            }
        </View>
    )
}


const mapStateToProps = (state) => ({
    photos: state.photos
  });
export default connect(mapStateToProps, { addPhoto })(PhotoList);