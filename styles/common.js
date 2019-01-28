import React, { Component } from 'react'
import { Platform, StyleSheet, Link, View } from 'react-native'
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
  }
})

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

  /*
    Used in loginPageStyles, searchLedgerPageStyles, searchResultsPageStyles
  */
  text: {
    alignSelf: 'center',
    padding: 2,
    color: '#0f2362'
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

  patientInfoStyle: {
    // color:'#ffffff', //white; this is done in line styling because this wouldn't change the text color
    backgroundColor: '#000080', // A Navy Blue Color
    paddingRight: 20,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0
  },

  patientTextStyle: {
    color: 'white'
  }
})

export const navigatorStyle = {
  navBarBackgroundColor: '#d40303',
  navBarTextColor: 'white'
}

export const tabBarStyle = {
  tabBarBackgroundColor: '#0f2362',
  tabBarButtonColor: '#ffffff',
  tabBarSelectedButtonColor: '#63d7cc',
  forceTitlesDisplay: true
}
