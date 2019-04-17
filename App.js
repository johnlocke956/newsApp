import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppNavigator from './src/navigation/AppNavigator';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
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
            <AppNavigator />
          </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C7EFCF',
    flex: 1,
    justifyContent: 'center'
  },
});
/*
const AppNavigator = createStackNavigator({
  Index: { screen: App, },
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerLeft: null
    }
  },
  Register: { screen: RegisterForm },
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: 'HOME',
    }
  }
});

export default createAppContainer(AppNavigator);*/
export default App;
