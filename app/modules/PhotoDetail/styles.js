import { StyleSheet, Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const themeClasses = require('../../styles').themeClasses;
const dimensions = require('../../styles').dimensions

let styles = StyleSheet.create({
   container:{
       ...themeClasses.container
   },
   containerList:{
        flex: 1,
        alignItems: 'center',
        paddingTop: moderateScale(120),
        ...themeClasses.marginHorizontal
    },
    containerImage:{
        width: moderateScale(340),
        height: moderateScale(340),
        backgroundColor: colors.white,
        borderRadius: 5,
        overflow: 'hidden'
       
    },
    image:{
       width: '100%',
       height: '100%'
    },
    containerDate:{
        marginTop: moderateScale(10),
        alignItems: 'flex-end',
        width: '100%'
    },
    textDate:{
        ...fontStyles.h5,
        color: colors.white,
    }
})

module.exports = {
    styles
}