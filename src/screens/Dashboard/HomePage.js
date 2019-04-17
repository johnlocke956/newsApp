import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { logoutUser, fetchNews } from '../../actions';
import { Head, Confirm } from '../../components/common';
import { News } from './News';
import NewsDetail from './NewsDetail';

class HomePage extends Component {
    static navigationOptions = {
        header: null,
      };

    state = {
        showModal: false,
        refreshing: false        
    }

    componentDidMount() {
        this.fetchData();
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
    
    onRefresh = () => {
        this.setState({
            refreshing: true
        });
        this.fetchData();
    }

    fetchData = () => {
        //this.props.fetchNews(this.props.lang);
        this.props.fetchNews();
        this.setState({
            refreshing: false
        });
    }
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Head
                    title='HOME'
                    icon='ios-home'//'eject'
                    onPress={() => this.setState({ showModal: true })}                    
                />
                <View style={styles.container}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            marginBottom: 5,
                            justifyContent: 'center',
                        }}
                        refreshControl={
                            <RefreshControl
                              refreshing={this.state.refreshing}
                              onRefresh={this.onRefresh}
                            />
                          }
                    >
                    {
                        this.props.news.map(n =>
                            <News
                                elem={n}
                                key={n.title}
                                onPress={() => this.props.navigation.navigate('NewsD', {
                                    title: n.title,
                                    author: n.source.name,
                                    desc: n.content,
                                    img: n.urlToImage,
                                    url: n.url,
                                })}
                            />
                        )
                    }
                    </ScrollView>
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
        padding: 15
    },
});

const mapStateToProps = store => {
    const { news, lang } = store.dashboard;

    return { news, lang };
};

export default createStackNavigator({
    NewsL: connect(mapStateToProps, { logoutUser, fetchNews })(HomePage),
    NewsD: NewsDetail
}, {
    initialRouteName: 'NewsL',
  }
);
