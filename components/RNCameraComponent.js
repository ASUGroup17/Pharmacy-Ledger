import React, {Component} from 'react';
import { PermissionsAndroid, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Icon, Input } from 'native-base'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

//class RNCameraComponent extends Component{


const RNCameraComponent = () => {

    return (        
    <View>
    <RNCamera
        style={commonStyles.preview}
        type={RNCamera.Constants.Type.back}
        //Turned flashMode to off; it was originally on
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
        onBarCodeRead={this.onBarCodeRead}
        ref={cam => this.camera = cam}
        //aspect={RNCamera.Constants.Aspect.fill}
        >
    </RNCamera>
    </View>
    );
}
     

export default withNavigation(RNCameraComponent);