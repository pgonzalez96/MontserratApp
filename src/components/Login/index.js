import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 40, paddingBottom: 10, fontWeight: 'bold'}}>Montserrat App</Text>

                <Image
                    source={require('../../img/cebolla.png')}
                    style={{width: 150, height: 150}}
                />

                <TextInput  style={{height: 50, fontSize: 30}}
                            placeholder="E-mail"
                            onChangeText={(email) => this.setState({email})}/>
                <TextInput  style={{height: 50, fontSize: 30}}
                            placeholder="Password"
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b5e20',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
