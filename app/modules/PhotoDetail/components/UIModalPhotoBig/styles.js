import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';

// import styles
const fontStyles = require('../../../../styles').fontStyles;
const colors = require('../../../../styles').colors;
const themeClasses = require('../../../../styles').themeClasses;
const dimensions = require('../../../../styles').dimensions

let styles = StyleSheet.create({
    container:{
        width: moderateScale(300),
        height: moderateScale(300),
        backgroundColor: colors.white,
        borderRadius: moderateScale(10),
        overflow: 'hidden',
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.modalBackground
    },
    containerOver: {
        position: 'absolute',
        left: moderateScale(45),
        top: moderateScale(200)

    },
    image:{
        width: '100%',
        height: '100%'
    }
});

module.exports = {
    styles
}