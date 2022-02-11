// View: Home
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
import CardAlbum from './components/CardAlbum'

// import to redux
import { connect } from "react-redux";
import { addAlbum } from '../../redux/actions/albumActions'

//import download
import ControllerAlbum from './ControllerAlbums';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay'

//import styles
const styles = require('./styles').styles;



const Home = ({ navigation, albums, addAlbum, }) =>{

    const [isLoading , setisLoading] = useState(true);

    useEffect(() => {
        init()
      }, []);

    async function init(){
        if(!albums.items){
            const albumns =  await haveOffline();
            if(albumns){
                console.log("entre")
                setisLoading(false)
                addAlbum(albumns)
            }else{
                const controllerAlbum = new ControllerAlbum();
                controllerAlbum.downloadAlbums(addAlbum, setisLoading);
            }
        }else{
            setisLoading(false)
        }
    }

    async function haveOffline(){
        const albumns = await AsyncStorage.getItem("albums")
        if(albumns){
            return JSON.parse(albumns)
        }
        return false
    }
    function changePage(albumId){
        navigation.navigate("PhotoList",{
            id: albumId
        })
    }
    console.log("albumnsosiosi", isLoading)

    return(
        <View style={styles.container}>
            <HeaderBar title={"Galería"}/>
            {
                isLoading &&
                    <Spinner
                        visible={true}
                    />
            }
                <ScrollView>
                    <View style={styles.containerList}>
                        {
                            albums.items ?
                                albums.items.length ?
                                    albums.items.map((album)=>{
                                        if(album){
                                            return(
                                                <CardAlbum 
                                                    id={album.id}
                                                    key={album.id}
                                                    name={album.title}
                                                    changePage={changePage}/>
                                            )
                                        }
                                    })
                                :
                                    null
                            :
                                null
                        }
                    </View>
                </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({
    albums: state.albums
  });
export default connect(mapStateToProps, { addAlbum })(Home);