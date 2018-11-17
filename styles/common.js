import React, {Component} from 'react';
import {Platform, StyleSheet, Link, View} from 'react-native';

export const confirmationPageStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    contentStyle: {
        flex: 1,
        flexGrow: 1,
    },
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
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'space-between',
    //alignItems: 'center'
    //backgroundColor: '#F5FCFF',
  },
  content: {
    //fontSize: 20,
    //textAlign: 'center',
    //margin: 10,
    //alignSelf: 'center',
    alignContent: 'space-around',
    justifyContent: 'space-around'
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginBottom: 100,
    marginTop: 50
    //textAlign: 'center',
    //color: '#333333',
    //marginBottom: 5,
  },
  text: {
    alignSelf: 'center',
    padding: 2
  },
  link: {
    alignSelf: 'center',
    color: '#0000ff',
    padding: 2
  }
});

export const medicationCaptureStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    contentStyle: {
        flex: 1,
        flexGrow: 1,
        //alignItems: 'center',
        justifyContent: 'space-around',
    },
    preview: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      },
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
    buttonStyle: {
        alignSelf: 'center'
    },
    groupTight: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

export const patientCapturePageStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    contentStyle: {
        flex: 1,
        flexGrow: 1,
        //alignItems: 'center',
        justifyContent: 'space-around',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
      },
    patientIdView: {
        flex: .2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingLeft: 50
    },
    buttonStyle: {
        alignSelf: 'center'
    }
});

export const searchLedgerPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-between',
    },

    content: {
        alignContent: 'space-around',
        justifyContent: 'space-around'
    },

    buttton: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        marginBottom: 100,
        marginTop: 50
    },

    text: {
        alignContent: 'center',
        padding: 2
    },

    link: {
        alignSelf: 'center',
        color: '#0000ff',
        padding: 2
    }
});

export const searchResultsPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignContent: 'space-between',
    },
    content: {
       justifyContent: 'space-around',
       alignContent: 'space-between',
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        marginBottom: 100,
        marginTop: 50
    },

    text: {
        alignContent: 'center',
        padding: 2
    },

    link: {
        alignSelf: 'center',
        color: '#0000ff',
        padding: 2
    }
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
