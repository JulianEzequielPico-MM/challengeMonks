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
        ...themeClasses.marginHorizontal,
        ...themeClasses.horizontalRow,
        justifyContent: 'space-between',
        marginTop: 20,
        flexWrap: 'wrap'
    },
})

module.exports = {
    styles
}