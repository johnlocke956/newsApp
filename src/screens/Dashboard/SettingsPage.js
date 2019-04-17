import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker, Platform } from 'react-native';
import { connect } from 'react-redux';
import { changeLang, fetchNews, logoutUser } from '../../actions';
import { Head, Confirm } from '../../components/common';

class SettingsPage extends Component {
    state = {
        l: '',
        showModal: false
    }
        
    onAccept() {
        this.props.logoutUser();
        this.props.navigation.navigate('Welcome');
    }
    
    onDecline() {
        this.setState({
            showModal: false
        });
    }

    render() {
        const {
            container,
            contStyle,
            titleStyle
        } = styles;
        
        return (
            <View style={{ flex: 1 }}>
                <Head
                    title='SETTINGS'
                    icon='ios-home'//'eject'
                    onPress={() => {
                        this.setState({ showModal: true });
                    }}   
                />
                <View style={container}>
                    <View style={contStyle}>
                        <Text style={titleStyle}>COUNTRY</Text>
                        <Picker
                            selectedValue={this.props.lang}
                            style={{ height: 'auto', width: 'auto', flex: 0.6, justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start' }}
                            itemStyle={{ fontSize: 17 }}
                            itemTextStyle={{ paddingLeft: 40 }}
                            onValueChange={(l) => {
                                this.setState({ l });
                                this.props.changeLang(l);
                                this.props.fetchNews();
                                }
                            }
                        >
                            <Picker.Item label='Austria' value='at' />
                            <Picker.Item label='France' value='fr' />
                            <Picker.Item label='Germany' value='de' />
                            <Picker.Item label='Italy' value='it' />
                            <Picker.Item label='Netherlands' value='nl' />
                            <Picker.Item label='United Kingdom' value='gb' />
                            <Picker.Item label='USA' value='us' />
                        </Picker>
                    </View>
                </View>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to exit?
                </Confirm>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    contStyle: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 'auto',
        flex: 0.4,
        //paddingRight: 40,
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

const mapStateToProps = store => {
    const { lang } = store.dashboard;

    return { lang };
};

export default connect(mapStateToProps, { changeLang, fetchNews, logoutUser })(SettingsPage);
