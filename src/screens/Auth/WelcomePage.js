import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Card, CardSection, Button } from '../../components/common';

class WelcomePage extends Component {
    static navigationOptions = {
        header: null
      }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar color='black' />
                <Card>
                    <CardSection>
                        <Button
                            label='LOGIN'
                            onPress={() => this.props.navigation.navigate('Login')}
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            label='SIGN UP'
                            onPress={() => this.props.navigation.navigate('Register')}
                        />
                    </CardSection>                    
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: '#C7EFCF',
      flex: 1,
      justifyContent: 'center'
    }
});

export default WelcomePage;
