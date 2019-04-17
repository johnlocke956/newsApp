import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Head, Spinner } from '../../components/common';
import { loginUser } from '../../actions';

class SignIn extends Component {
    static navigationOptions = {
        header: null
      }

    state = {
        email: 'test@test.com',
        password: 'password'
    };

    componentWillUnmount() {
        this.setState({
            email: '',
            password: ''
        });
    }

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
        const { navigation } = this.props;

        this.props.loginUser({ email, password })
            .then(() => {
                navigation.navigate('Home');                
            })
            .catch(() => null);
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        
        return (
            <Button
                label='Enter'
                onPress={this.onButtonPress.bind(this)}
            />        
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Head
                    title='SIGN IN'
                    icon='ios-home'
                    onPress={() => this.props.navigation.navigate('Welcome')}
                />
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
                        {this.renderButton()}
                    </CardSection>
                    <CardSection>
                        <Text style={styles.errorTextStyle}>
                            {this.props.error ? this.props.error : ' '}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text>Need an account? Sign up here.</Text>
                        </TouchableWithoutFeedback>
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
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        padding: 20
    }
  });

const mapStateToProps = store => {
    const { user, error, loading } = store.auth;

    return { user, error, loading };
};

export default connect(mapStateToProps, { loginUser })(SignIn);
