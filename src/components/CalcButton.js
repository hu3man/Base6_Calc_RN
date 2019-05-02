import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { ButtonStyles } from './Styles';

const CalcButton = (props) => {
    return (
        <TouchableHighlight
            style={ButtonStyles.inputButton}
            onPress={props.handleKeyPress}
            underlayColor='#00CC4B'>

            <Text style={ ButtonStyles.buttonText }>{ props.value }</Text>
        </TouchableHighlight>
    )
};
export default CalcButton;
