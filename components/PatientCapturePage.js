import React, {Component} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, Form, Item, Input } from 'native-base'
import { RNCamera } from 'react-native-camera'
    
const PendingView = () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Waiting</Text>
        </View>
      );


class PatientCapturePage extends Component {

    continueHandler = () => {
        this.props.navigator.push({
            screen: 'pharmacy-ledger.MedicationCapturePage',
            title: 'Add Medication'
        })
    }    

    render () {
        return (
            <Container style={styles.containerStyle}>
                <Content contentContainerStyle={{flexGrow: 1, justifyContent: "center"}}>
                <View style={styles.contentStyle}>
                    <Text style={{alignSelf: 'center'}}>
                        Scan Patient's Wristband
                    </Text>

                    <RNCamera
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        >
                        {({ camera, status }) => {
                            if (status !== 'READY') return <PendingView />;
                            return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                <Text style={{ fontSize: 14 }}> Capture Image </Text>
                                </TouchableOpacity>
                            </View>
                            );
                        }}
                    </RNCamera>


                    <View style={styles.patientIdView}>
                        <Text>
                            Patient ID:
                        </Text>
                        <Input placeholder="Patient ID" />
                    </View>
                    <Button bordered style={styles.buttonStyle} onPress={this.continueHandler}>
                        <Text>
                            Continue
                        </Text>
                    </Button>
                </View>
                </Content>
            </Container>
        );
    }

    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
      }
}

const styles = StyleSheet.create({
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


})

export default PatientCapturePage;
