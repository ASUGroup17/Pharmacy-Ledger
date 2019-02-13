/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Link, View, Image} from 'react-native';
import { Container, Header, Content, Button, Text, Form, Item, Input } from 'native-base'
import startMainTabs from './startMainTabs';
import {loginPageStyles as styles, commonStyles} from '../styles/common'
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog';

class LoginPage extends Component {

  loginHandler = () => {
    console.log("Clicked")
    startMainTabs();
  }

  state = {
    visiblePopup: false,
    setState: false
  };

  render() {
    return (
      <Container style={commonStyles.container}>
        <Content>
        <View style={commonStyles.content}>
          <Image source={require('../icons/PCHlogo.png')} style={commonStyles.logo}/>
          <Text style={commonStyles.title}>Pharmacy Ledger Login</Text>
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
          <Text style={commonStyles.link}
            onPress={() => {
              this.setState({ visiblePopup: true });
            }}
          >Terms of Service</Text>
          <Dialog
            visible={this.state.visiblePopup}
            onTouchOutside={() => {
              this.setState({ visiblePopup: false });
            }}
            dialogTitle={
              <DialogTitle
                title="U.S. National Library of Medicine Terms of Service"
                style={{
                  backgroundColor: '#e0f2dc',
                }}
                hasTitleBar={false}
                align="left"
              />
            }
            actions={[
              <DialogButton
                text="OK"
                style={{
                  backgroundColor: '#e0f2dc',
                }}
                onPress={() => {
                  this.setState({ visiblePopup: false });
                }}
                key="button-2"
              />
            ]}
          >
            <DialogContent
              style={{
                backgroundColor: '#e0f2dc',
              }}
            >
              <Text>This product uses publicly available data from the U.S. National Library of Medicine (NLM), National Institutes of Health, Department of Health and Human Services; NLM is not responsible for the product and does not endorse or recommend this or any other product.</Text>
            </DialogContent>
          </Dialog>
          </View>
        </Content>
      </Container>
    );
  }
}
export default LoginPage;
