/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Link, View} from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base'

class LoginPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <View style={styles.content}>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form> 
          <Button bordered style={styles.button}>
            <Text>
              Login!
            </Text>
          </Button>
          <Text style={styles.text}>Selected EMR</Text>
          <Text style={styles.text}>PCH - Allscripts</Text>
          <Text style={styles.link}>Change System</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginPage;

const styles = StyleSheet.create({
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
