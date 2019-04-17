/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Header } from 'react-native-elements';
import { TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Head = ({ title, icon, onPress }) => {
    return (
        <View>
            <StatusBar barStyle='light-content' />
            <Header
                centerComponent={{
                    text: `${title}`,
                    style: {
                        color: '#fff',
                        marginBottom: -20,
                        fontSize: 19
                    }
                }}
                rightComponent={
                    <TouchableWithoutFeedback onPress={onPress} >
                        <Icon
                            name={icon}
                            color='#fff'
                            size={20}
                            style={{
                                top: 10,
                            }}
                        />
                    </TouchableWithoutFeedback>
                }
                containerStyle={{
                    backgroundColor: '#011627'/*'0C2A08'*/,
                    height: 80,
                }}
            />
        </View>
    );
};

export { Head };
