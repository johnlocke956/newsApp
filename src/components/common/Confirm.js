import React from 'react';
import { Text, View, Modal, Button, StatusBar } from 'react-native';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle } = styles;
    
    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
            onRequestClose={() => {}}
        >
            <StatusBar barStyle='dark-content' />
            <View style={containerStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
                <View style={{ padding: 10, width: 120, alignSelf: 'center' }}>
                    <Button
                        title='YES'
                        color='#F4281F'
                        onPress={onAccept}
                    />
                </View>
                <View style={{ padding: 10, width: 120, alignSelf: 'center', }}>
                    <Button
                        title='NO'
                        color='#F4281F'
                        onPress={onDecline}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        padding: 20
    },
};

export { Confirm };
