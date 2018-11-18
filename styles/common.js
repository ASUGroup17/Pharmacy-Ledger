import React, {Component} from 'react';
import {Platform, StyleSheet, Link, View} from 'react-native';

export const confirmationPageStyles = StyleSheet.create({
    viewStyle: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'space-around',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 50,
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
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
});

export const loginPageStyles = StyleSheet.create({

});

export const medicationCaptureStyles = StyleSheet.create({
    viewStyle: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingLeft: 50,
        backgroundColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
    },
    groupTight: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export const patientCapturePageStyles = StyleSheet.create({
    patientIdView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 50
    },
});

export const searchLedgerPageStyles = StyleSheet.create({

});

export const searchResultsPageStyles = StyleSheet.create({

});


export const commonStyles = StyleSheet.create({

  // confirmationPageStyles
  // medicationCaptureStyles
  // patientCapturePageStyles
  containerStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1
  },

  // loginPageStyles
  // searchLedgerPageStyles
  // searchResultsPageStyles
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },

  // confirmationPageStyles
  contentStyle: {
    flex: 1,
    flexGrow: 1,
  },

  // medicationCaptureStyles
  // patientCapturePageStyles
  contentStyle2: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-around',
  },

  // searchLedgerPageStyles
  // loginPageStyles
  content: {
    alignContent: 'space-around',
    justifyContent: 'space-around'
  },

  // searchResultsPageStyles
  content2: {
    justifyContent: 'space-around',
    alignContent: 'space-between',
  },

  // medicationCaptureStyles
  // patientCapturePageStyles
  buttonStyle: {
    alignSelf: 'center'
  },

  // searchLedgerPageStyles
  // searchResultsPageStyles
  // loginPageStyles
  button: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginBottom: 100,
    marginTop: 50
  },

  // loginPageStyles
  // searchLedgerPageStyles
  // searchResultsPageStyles
  text: {
    alignSelf: 'center',
    padding: 2
  },

  // medicationCaptureStyles
  preview: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  // patientCapturePageStyles
  preview2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  // medicationCaptureStyles
  // patientCapturePageStyles
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },

  // loginPageStyles
  // searchLedgerPageStyles
  // searchResultsPageStyles
  link: {
    alignSelf: 'center',
    color: '#0000ff',
    padding: 2
  }

});
