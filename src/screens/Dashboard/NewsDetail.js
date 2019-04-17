import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableWithoutFeedback,
    Linking
} from 'react-native';

export default class NewsDetail extends Component {
    render() {
        const { navigation } = this.props;
        const img = navigation.getParam('img', '');
        const title = navigation.getParam('title', '');
        const desc = navigation.getParam('desc', '');
        const url = navigation.getParam('url', '');
        //const lang = navigation.getParam('lang', '');

        const {
            imgStyle,
            titleStyle,
            textStyle,
            linkStyle,
        } = styles;

        return (
            <View style={{ flexDirection: 'column', padding: 10, flex: 1 }}>
                <StatusBar barStyle='dark-content' />
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ height: 180, }}>
                        <ImageBackground
                            source={{ uri: img != null ? img : 'https://dummyimage.com/700x400/ffffff/ffffff' }}
                            style={imgStyle}
                            imageStyle={{ borderRadius: 6 }}
                        >
                            <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', flex: 1, borderRadius: 6 }}>
                                <Text style={titleStyle}> {title} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={textStyle}> {desc} </Text>
                    <TouchableWithoutFeedback
                        onPress={() => Linking.openURL(url)}
                    >
                        <Text style={linkStyle}>Read more</Text>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    imgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 6
    },
    titleStyle: {
        fontSize: 25,
        padding: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
    },
    textStyle: {
        fontSize: 18,
        paddingTop: 25,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify'
    },
    linkStyle: {
        fontSize: 18,
        paddingTop: 50,
        paddingLeft: 10,
        fontStyle: 'italic',
        color: 'black',
    },
});
