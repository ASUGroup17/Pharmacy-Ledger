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
import {loginPageStyles as styles, commonStyles} from '../styles/common'

class LoginPage extends Component {

  loginHandler = () => {
    console.log("Clicked")
    startMainTabs();
  }

  render() {
    return (
      <Container style={commonStyles.container}>
        <Content>
        <View style={commonStyles.content}>
          <Form>
            <Item>
              <Input placeholder="Username"
                placeholderTextColor={commonStyles.text.color} />
            </Item>
            <Item last>
              <Input placeholder="Password"
                placeholderTextColor={commonStyles.text.color} />
            </Item>
          </Form>
          <Button bordered style={commonStyles.button} onPress={this.loginHandler}>
            <Text>
              Login!
            </Text>
          </Button>
          <Text style={commonStyles.text}>Selected EMR</Text>
          <Text style={commonStyles.text}>PCH - Allscripts</Text>
          <Text style={commonStyles.link}>Change System</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
export default LoginPage;
