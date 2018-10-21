/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base'

class LoginPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header><Text>Pharmacy Ledger</Text></Header>
        <Content style={styles.content}>
        <Button bordered style={styles.button}>
          <Text>
            Login!
          </Text>
        </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  content: {
    //fontSize: 20,
    //textAlign: 'center',
    //margin: 10,
    justifyContent: 'space-around'
  },
  button: {
    //textAlign: 'center',
    //color: '#333333',
    //marginBottom: 5,
  },
});
