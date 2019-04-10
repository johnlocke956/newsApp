import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, label }) => {
    const { buttonStyle, textStyle } = styles;
    
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: '#0C2A08',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#ACC8A8',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0C2A08'
    }
});

export { Button };
