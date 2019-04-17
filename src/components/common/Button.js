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
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#F4281F'/*'#164C0D'*/,
        borderRadius: 4,
        flex: 0.35,
    }
});

export { Button };
