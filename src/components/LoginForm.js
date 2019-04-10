import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    onEmailChange(text) {
        this.setState({
            email: text
        });
    }

    onPasswordChange(text) {
        this.setState({
            password: text
        });
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.props.loginUser({ email, password });
    }
        
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        
        return (
            <Button
                label='LOGIN'
                onPress={this.onButtonPress.bind(this)}
            />            
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.error}</Text>
                <Card>
                    <CardSection>
                        <Input
                            label='Email'
                            placeholder='user@email.com'
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label='Password'
                            placeholder='password'
                            onChangeText={this.onPasswordChange.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            label='Enter'
                        />
                    </CardSection>
                    <CardSection>
                        <Text>{this.state.email}</Text>
                        <Text>{this.state.password}</Text>
                    </CardSection>
                    <CardSection>
                        {this.props.error}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#C7EFCF',
      flex: 1,
      paddingTop: 150,
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        padding: 20
    }
  });

const mapStateToProps = store => {
    const { error, loading } = store.auth;
    console.log(error);

    return { error, loading };
};

LoginForm.navigationOptions = { title: 'LOGIN' };

export default connect(mapStateToProps, { loginUser })(LoginForm);
//export default LoginForm;
