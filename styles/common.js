import React, { Component } from 'react'
import { Platform, StyleSheet, Link, View } from 'react-native'
import { Row, Icon } from 'native-base'
// <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css"></link>

export const confirmationPageStyles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    backgroundColor: 'lavender',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  cardHeaderStyle: {
    backgroundColor: 'lightgray',
    paddingTop:10,
    paddingBottom:10
  },
  cardBodyStyle: {
    backgroundColor: 'gainsboro',
    paddingTop:5,
    paddingBottom:0
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
    backgroundColor: 'lavender',
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
  },
  
})

export const medicationDataDisplayStyles = StyleSheet.create({
 
  //The container for the whole display of medication Name, checkMark and Camera Icons
  medicationNameContainer : {  
    backgroundColor : 'lavender',
    flex : 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent : 'space-between',
    paddingLeft: 5,
    paddingRight: 5
  },
  //The Portions of the Container that has the Text  
  medicationNameTextStyle : {
    flex : 1,
    color: '#0f2362',
    flexWrap: 'wrap'
  },
  //The portion of the Container that has the checkmark Icon
  medicationNameCheckmarkStyle: {
    alignItems: "flex-end"
  }
});

export const patientCapturePageStyles = StyleSheet.create({
  patientIdView: {
    flex: 1,
    backgroundColor: 'lavender', // upper part, patientID area
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
    backgroundColor: 'lavender', // lower part
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
    backgroundColor: 'lavender',
    flexGrow: 1
  },

  content: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'lavender'
    // alignContent: 'space-around',
    // justifyContent: 'space-around'
  },

  /*
    not used in confirmationPageStyles
  */
  button: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    color: '#7E0AF9',
    backgroundColor: '#C5ECF4',
    marginBottom: 20,
    marginTop: 20
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
    backgroundColor: 'lavender',
    marginTop: 20,
    marginLeft: 10
  },

  logo: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around'

  },

  /*
    Used in loginPageStyles, searchLedgerPageStyles, searchResultsPageStyles
  */
  text: {
    alignSelf: 'center',
    padding: 2,
    color: '#0f2362'
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
    color: '#ff001d',
    padding: 2
  },

  patientInfoStyle: {
    // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
    backgroundColor: '#000080', // A Navy Blue Color
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },

  patientTextStyle: {
    color: 'white'
  }
})

export const patientInfoCardStyles = StyleSheet.create({
  patient_ID_DOB_Style: {
    backgroundColor: '#000080', // A Navy Blue Color
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    //flexDirection : 'row',
    //justifyContent: 'center'
  },
  patient_IDStyle: {
    backgroundColor: '#000080', // A Navy Blue Color
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    color: 'white',
    width: '65%'
  },
  patient_DOBStyle: {
    backgroundColor: '#000080', // A Navy Blue Color
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    color: 'white',
    width: '35%'
  }
})

export const navigatorStyle = {
  navBarBackgroundColor: '#d40303', // A red color
  navBarTextColor: 'white'
}

export const tabBarStyle = {
  tabBarBackgroundColor: '#0f2362', // A dark blue color
  tabBarButtonColor: '#ffffff', // A white color
  tabBarSelectedButtonColor: '#63d7cc', // A teal color
  forceTitlesDisplay: true
}
