import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        shadowOpacity: 0.1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export { Card };
