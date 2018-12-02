import React, { Component } from 'react'
import { Platform, StyleSheet, Link, View } from 'react-native'
//<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css"></link>

export const confirmationPageStyles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  //this is the Styling for the Patient Information card at the top of some screens
  patientInfoStyle: {    
    // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
     backgroundColor:'#000080',  //A Navy Blue Color
     paddingRight:20, 
     paddingBottom:0,
     paddingTop: 0,
     paddingLeft: 0
   },
  cardHeaderStyle: {
    backgroundColor: 'lightgray'
  },
  cardBodyStyle: {
    backgroundColor: 'gainsboro'
  },
  buttonRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'flex-end'
  }
})


export const patientInfoStyles = StyleSheet.create ( {
  patientInfoStyle: {    
   // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
    backgroundColor:'#000080',  //A Navy Blue Color
    paddingRight:20, 
    paddingBottom:0,
    paddingTop: 0,
    paddingLeft: 0
  }
})

export const loginPageStyles = StyleSheet.create({

})

export const medicationCaptureStyles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 150,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 1,
    marginRight: 1
  },
  patientInfoStyle: {    
    // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
     backgroundColor:'#000080',  //A Navy Blue Color
     paddingRight:20, 
     paddingBottom:0,
     paddingTop: 0,
     paddingLeft: 0
   },
  groupTight: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export const patientCapturePageStyles = StyleSheet.create({
  patientIdView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 5
  },
  viewStyle: {
    flex: .1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 50,
    backgroundColor: 'white',
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
    flexGrow: 1
  },

  content: {
    flex: 1,
    flexGrow: 1,
    //alignContent: 'space-around',
    //justifyContent: 'space-around'
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

  /*
    Used in loginPageStyles, searchLedgerPageStyles, searchResultsPageStyles
  */
  text: {
    alignSelf: 'center',
    padding: 2
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
  }
})
