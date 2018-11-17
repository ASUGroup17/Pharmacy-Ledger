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
