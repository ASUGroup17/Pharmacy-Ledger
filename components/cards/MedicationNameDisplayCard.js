import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Card, Text, Item, Input, Icon } from 'native-base';
import { medicationCaptureStyles as styles, commonStyles } from '../../styles/common';

//This is a reuseable component that will display the medication name, the checkmark and eventually the camera icon
const MedicationNameDisplayCard = ({ medication }) => {
    if (!medication.name) {
        return(
            <Card transparent> 
            <CardItem style={styles.medicationNameCardStyle}>
                <Item success ={(!medication.name) ? false : true}>                   
                    <Text style={styles.medicationNameTextStyle}>
                       Medication:
                    </Text>                   
                    <Icon name='checkmark-circle' />
                </Item>   
            </CardItem>
            </Card>
        );
    }

        return (
           <Card transparent>
                {/*<Text style={commonStyles.text}>
                    
        </Text>*/}
         <CardItem style={styles.medicationNameCardStyle}>
         <View>
             <Text style={styles.medicationNameTextStyle}>
                Medication: {medication.name}
            </Text>
            </View>
            <View>
            <Item success ={(!medication.name) ? false : true}>
                                            
                    <Icon name='checkmark-circle' />
                </Item>            
                </View>
        </CardItem>
            </Card>
        );
}//end MedicationNameDisplayCard

const mapStateToProps = (state) => {
    return {
        medication : state.medication
    };
};

export default connect (mapStateToProps)(MedicationNameDisplayCard);