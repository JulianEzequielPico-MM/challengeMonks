import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: moderateScale(110),
        height: moderateScale(110),
        backgroundColor: colors.white,
        borderRadius: 5,
        overflow: 'hidden',
        margin: moderateScale(5),
        borderWidth: 2,
        borderColor: colors.white
       
    },
    image:{
        flex:1
    },
    textName:{
        ...fontStyles.p2,
        paddingBottom: moderateScale(10)
    },
})

module.exports = {
    styles
}