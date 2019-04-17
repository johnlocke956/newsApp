import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const News = ({ elem, onPress }) => {
    const {
        title,
        source,
        urlToImage
    } = elem;

    const {
        newsStyle,
        titleStyle,
        descStyle,
        imgStyle
    } = styles;

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            pippo={elem}
        >
            <View style={{ flexDirection: 'column' }}>
                <View style={newsStyle}>
                    <View style={{ flex: 0.3 }}>
                        <Image style={imgStyle} source={{ uri: urlToImage != null ? urlToImage : 'https://dummyimage.com/700x400/ffffff/ffffff' }} />
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'column' }}>
                        <Text style={titleStyle}>{title}</Text>
                        <Text style={descStyle}>{source.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    newsStyle: {
        borderRadius: 4,    
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: '100%',
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        height: 'auto',
    },
    imgStyle: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignSelf: 'flex-end',
        borderRadius: 6,
    },
    titleStyle: {
        fontWeight: 'bold',
        width: '100%',
        fontSize: 15,
        paddingLeft: 8,
        paddingBottom: 8,
    },
    descStyle: {
        fontSize: 13,
        paddingLeft: 8,
    },
});

export { News };
