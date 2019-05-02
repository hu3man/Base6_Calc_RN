import { StyleSheet } from 'react-native';

export const LayoutStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4DFF8E'
    },

    displayContainer: {
        flex: 1,
        backgroundColor: '#00CC4B',
        marginTop: 20
    },

    screen: {
        height: 75,
        margin: 20,
        backgroundColor: '#268047',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    screenText: {
        color:'#4DFF8E',
        fontSize: 45,
        marginRight: 10
    },

    inputContainer: {
        flex: 1,
        backgroundColor: '#0DFF91'
    },

    rowOfButtons: {
        flex: 1,
        flexDirection: 'row'
    },

    patternContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },

    backgroundPattern: {
        flex:1,
        resizeMode: 'repeat'
    }

});

export const ButtonStyles = StyleSheet.create({
    inputButton: {
        flex: 1,
        borderColor: '#4DFF8E',
        backgroundColor: '#00802F',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15

    },
    buttonText: {
        color: '#01FF5D',
        fontSize: 26,
        fontWeight: 'bold'
    },
    buttonHighlighted: {
        backgroundColor: '#00CC4B'
    }
});

