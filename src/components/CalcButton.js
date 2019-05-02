import React, {Component} from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { ButtonStyles } from './Styles';

const CalcButton = (props) => {
    return (
        <TouchableHighlight
            style={[ ButtonStyles.inputButton, props.highlighted ? ButtonStyles.buttonHighlighted : null ]}
            onPress={props.handleKeyPress}
            underlayColor='#00CC4B'
        >
            <Text style={ ButtonStyles.buttonText }>{ props.value }</Text>
        </TouchableHighlight>
    )
};
export default CalcButton;
