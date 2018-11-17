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
import startMainTabs from './startMainTabs';
import {loginPageStyles as styles} from '../styles/common'

class LoginPage extends Component {
  loginHandler = () => {
  console.log("Clicked")
  startMainTabs();
  }

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
          <Button bordered style={styles.button} onPress={this.loginHandler}>
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
