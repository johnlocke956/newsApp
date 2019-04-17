import React from 'react';
import { View } from 'react-native';

const Footer = (props) => {
    return (
        <View style={styles.containerStyle}>            
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#0C2A08',
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
    }
};

export { Footer };
