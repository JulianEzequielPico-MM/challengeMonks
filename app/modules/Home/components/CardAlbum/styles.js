import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    containerPrincipal:{
        height: moderateScale(170),
        width: moderateScale(150),
        borderRadius: moderateScale(10),
        backgroundColor: 'white',
        ...themeClasses.fullCenterAlign,
        borderWidth: .5,
        borderColor: colors.secondaryBlack
       
    },
    container:{
        height: moderateScale(190),
        width: moderateScale(170),
        ...themeClasses.fullCenterAlign,
        marginVertical: moderateScale(20)
       
    },
    containerBack:{
        height: moderateScale(180),
        width: moderateScale(130),
        borderRadius: moderateScale(10),
        transform: [{ rotate: '20deg'}],
        position: 'absolute',
        backgroundColor:'white',
        opacity: .7
    },
    containerBackLeft:{
        height: moderateScale(150),
        width: moderateScale(130),
        borderRadius: moderateScale(10),
        transform: [{ rotate: '340deg'}],
        position: 'absolute',
        backgroundColor:'white',
        opacity: .4
    },
    image:{
        width: moderateScale(100),
        height: moderateScale(100),
        backgroundColor: colors.secondaryBlack,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: moderateScale(20),
        borderWidth: 2,
        borderColor: colors.secondaryBlack
    },
    textName:{
        ...fontStyles.p2,
        marginVertical: moderateScale(10)
    },
})

module.exports = {
    styles
}