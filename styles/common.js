import React, {Component} from 'react';
import {Platform, StyleSheet, Link, View} from 'react-native';

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
