import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {LayoutStyles} from "./Styles";
import CalcButton from "./CalcButton";
import BigNumber from 'bignumber.js';

const inputButtons = [
    ['C', '+', '-', 'x'],
    [0, 1, 2, '/'],
    [3, 4, 5, '=']
];

class SungCalculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayValue: '0',
            previousValue: '0',
            operation: null
        };
    }

    render() {
        return (
            <View style={LayoutStyles.mainContainer}>
                <View style={LayoutStyles.displayContainer}>
                    <View style={LayoutStyles.patternContainer}>
                    <Image style={LayoutStyles.backgroundPattern}
                           source={require('../../assets/backgroundPattern.png')}
                    />
                    </View>
                        <View style={LayoutStyles.screen}>
                            <Text style={LayoutStyles.screenText}>{this.state.displayValue}</Text>
                        </View>
                </View>
                <View style={LayoutStyles.inputContainer}>
                    {this._renderButtonGrid()}
                </View>
            </View>
        )
    }

    //Dispatch correct action based on type of key pressed
    _handleKeyPress(input){
        switch (typeof  input){
            case 'number': return this._handleNumericalKeyPress(input);
            case 'string': return this._handleOperationKeyPress(input);
        }
    }

    //Controls the main calculator behaviour when operator keys are pressed
    _handleOperationKeyPress(value){
        switch (value) {
            case '+':
            case '-':
            case 'x':
            case '/':
                //On operand keypress, set operator and move display value to previous value
                this.setState({
                    previousValue: this.state.displayValue,
                    displayValue: '0',
                    operation: value
                });
                break;

            case '=':
                let operator = this.state.operation,
                    y = this.state.displayValue,
                    x = this.state.previousValue;

                //If no operator was selected, abort calculation
                if(!operator){
                    return;
                }
                //Calculates result and sets state
                this._performCalculation(x, y, operator);
                break;

            //Clears display and previous values and sets operator to null
            case 'C':
                this.setState({
                    displayValue: '0',
                    previousValue: '0',
                    operator: null
                });
                break;
        }
    }

    //Performs a calculation based on 2 base6 operands and sets the display value as a base6 string
    _performCalculation(x, y, operation){
        //Convert numerical values to base_6 BigNumber objects
        let op1 = new BigNumber(x, 6);
        let op2 = new BigNumber(y, 6);
        let result = new BigNumber(0, 6);

        //Perform calculation in BigNumber format
        switch(operation){
            case '+':
                result = op1.plus(op2);
                break;

            case '-':
                result = op1.minus(op2);
                break;

            case 'x':
                result = op1.times(op2);
                break;

            case '/':
                result = op1.div(op2);
                break;
        }

        //Set display value to a string representing the base 6 number
        this.setState({
            displayValue: result.toString(6)
        })
    }

    //Handle numerical keypress, uses string concatenation to build display number
    _handleNumericalKeyPress(value){
        if(this.state.displayValue === '0'){
            this.setState({
                displayValue: value.toString()
            })
        }else{
            this.setState({
                displayValue: this.state.displayValue + value.toString()
            })
        }
    }

    //Generate a grid of buttons, assigning key values
    _renderButtonGrid() {
        let gridComponents = [];

        for(let i = 0; i < inputButtons.length; i++){
            let rowValues = inputButtons[i];
            let rowComponents = [];

            //Generate a single row of button components
            for(let j = 0; j < rowValues.length; j++){
                let keyValue = rowValues[j];
                rowComponents.push(
                    <CalcButton value={keyValue}
                                key={i + '-' + j}
                                handleKeyPress={this._handleKeyPress.bind(this, keyValue)}
                                highlight={this.state.operation === keyValue}/>
                    );
            }
            //Assemble the array of button components into a View representing a row of keys
            let assembledRow =
                <View style={LayoutStyles.rowOfButtons} key={'row' + i}>{rowComponents}</View>;
            gridComponents.push(assembledRow);
        }
        return gridComponents;
    }

}
export default SungCalculator;
