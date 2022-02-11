// Component HeaderBar
// Developer: Pablo Larios  
import { Icon } from 'native-base';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


//import styles
const styles = require('./styles').styles;



const HeaderBar = ({title, notShow}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHorizontal}>
                {
                    notShow ?
                        null
                    :
                        <TouchableOpacity
                            
                            onPress={()=>{
                                Actions.pop()
                            }}
                        >
                            {/* <Icon
                                name={"arrow-left"}
                                type={"SimpleLineIcons"}
                                style={[styles.icon]}
                            /> */}
                            {/* <CustomIcon name={'arrow-left'} style={[styles.icon, color ? { color }: ""]} /> */}
                        </TouchableOpacity>
                }
                
            </View>
            <View style={styles.containerCenter}>
                <Text 
                    numberOfLines={2}
                    style={styles.title}>{title ? title : ''}
                </Text>
            </View>
            <View style={styles.containerHorizontal}/>
        </View>
    );
};

module.exports = HeaderBar;