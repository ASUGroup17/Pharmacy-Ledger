import React, { Component } from 'react'
import { Platform, StyleSheet, Link, View } from 'react-native'
import { Row, Icon } from 'native-base'
// <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css"></link>

// Phoenix Children's Color Palette
const mainWhite = '#FFFFFF'
const mainRed = '#EC1C2C'
const secondaryRed = '#ff001d'
const actionBlue = '#63d7cc'
const secActionBlue = '#489c94'
const darkPurple = '#6627B9'
const lightPurple = '#6627B9'
const purple = '#8F5FB4'

export const confirmationPageStyles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    backgroundColor: mainWhite,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  cardHeaderStyle: {
    backgroundColor: mainWhite,
    paddingTop: 10,
    paddingBottom: 10
  },
  cardBodyStyle: {
    backgroundColor: mainWhite,
    paddingTop: 5,
    paddingBottom: 0
  },
  buttonRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end'
  }

})

// export const loginPageStyles = StyleSheet.create({
// })

export const medicationCaptureStyles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 150,
    backgroundColor: mainWhite,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 1,
    marginRight: 1
  },
  groupTight: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export const medicationDataDisplayStyles = StyleSheet.create({

  // The container for the whole display of medication Name, checkMark and Camera Icons
  medicationNameContainer: {
    backgroundColor: mainWhite,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5
  },
  //The Portions of the Container that has the Text
  medicationNameTextStyle : {
    flex : 1,
    color: darkPurple,
    flexWrap: 'wrap'
  },
  // The portion of the Container that has the checkmark Icon
  medicationNameCheckmarkStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})

export const patientCapturePageStyles = StyleSheet.create({
  patientIdView: {
    flex: 1,
    backgroundColor: mainWhite, // upper part, patientID area
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 5
  },
  viewStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 50,
    backgroundColor: mainWhite, // lower part
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  }
})

export const searchLedgerPageStyles = StyleSheet.create({

})

export const searchResultsPageStyles = StyleSheet.create({

})

export const commonStyles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    backgroundColor: mainWhite,
    flexGrow: 1
  },

  content: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: mainWhite, // a white color
    // alignContent: 'space-around',
    // justifyContent: 'space-around'
  },

  content2: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'rgb(144,186,57)' // a white color
    // alignContent: 'space-around',
    // justifyContent: 'space-around'
  },

  /*
    not used in confirmationPageStyles
  */
  button: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    color: secActionBlue,
    backgroundColor: secActionBlue, // a light teal color
    margin: 20
  },  
  buttonRight: {
    alignSelf: 'flex-end',
    color: '#7E0AF9',
    backgroundColor: '#C5ECF4',
    marginTop: 20,
    marginRight: 10
  },

  medIcon: {
    alignSelf: 'flex-start',
    color: '#03ba43',
    backgroundColor: mainWhite,
    marginTop: 20,
    marginLeft: 10
  },

  logo: {
    alignSelf: 'center',
    margin: 20,
    justifyContent: 'space-around',
    alignContent: 'space-around'

  },

  /*
    Used in loginPageStyles, searchLedgerPageStyles, searchResultsPageStyles
  */
  text: {
    alignSelf: 'center',
    padding: 2,
    color: '#011627' // a dark gray color
  },

  title: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },

  /*
    Used in medicationCaptureStyles, patientCapturePageStyles
  */
  preview: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  /*
    Used in medicationCaptureStyles, patientCapturePageStyles
  */
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },

  /*
    Used in loginPageStyles, searchLedgerPageStyles, searchResultsPageStyles
  */
  link: {
    alignSelf: 'center',
    color: '#0000ff',
    padding: 2
  },

  linkRed: {
    alignSelf: 'flex-start',
    color: secondaryRed, // a red color
    padding: 2
  },

  patientInfoStyle: {
    // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
    backgroundColor: darkPurple,
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },

  patientTextStyle: {
    color: mainWhite
  }
})

commonStyles.cancelButton = {
  ...commonStyles.button,
  backgroundColor: secondaryRed
}

export const patientInfoCardStyles = StyleSheet.create({
  patient_ID_DOB_Style: {
    backgroundColor: darkPurple, 
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0
    // flexDirection : 'row',
    // justifyContent: 'center'
  },
  patient_IDStyle: {
    backgroundColor: darkPurple,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    color: mainWhite,
    width: '65%'
  },
  patient_DOBStyle: {
    backgroundColor: darkPurple,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    color: mainWhite,
    width: '35%'
  }
})

export const navigatorStyle = {
  navBarBackgroundColor: mainRed,
  navBarTextColor: mainWhite,
  navBarButtonColor: mainWhite
}

export const tabBarStyle = {
  tabBarBackgroundColor: darkPurple, // A dark blue color
  tabBarButtonColor: mainWhite, // A white color
  tabBarSelectedButtonColor: actionBlue,
  forceTitlesDisplay: true
}
