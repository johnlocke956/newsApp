import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/RegisterForm';
import { Header, Card, CardSection, Button } from './src/components/common';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBJzdczECw0b49Pq5gpytBET1TRYkf3gSo',
      authDomain: 'newsapp-48527.firebaseapp.com',
      databaseURL: 'https://newsapp-48527.firebaseio.com',
      projectId: 'newsapp-48527',
      storageBucket: 'newsapp-48527.appspot.com',
      messagingSenderId: '537939546747'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Card>
            <Header
              headerText='WELCOME TO YOUR BEST NEWS APP!'
            />
            <CardSection>
              <Button
                style={{ height: 20 }}
                label='LOGIN'
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </CardSection>
            <CardSection>
              <Button
                style={{ height: 20 }}
                label='REGISTER'
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </CardSection>
          </Card>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7EFCF',
    flex: 1
  },
});

const AppNavigator = createStackNavigator({
  Home: { screen: App, },
  Login: { screen: LoginForm },
  Register: { screen: RegisterForm }
});

export default createAppContainer(AppNavigator);
