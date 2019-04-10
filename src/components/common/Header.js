// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {    
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Styling the component
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        marginTop: 100
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center'
    }
};

// Make the component available to the other parts of the app
export { Header };
