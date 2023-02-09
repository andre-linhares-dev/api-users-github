import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { styles } from './LoginStyles';


export function Login() {

const [user, setUser] = React.useState('');
const [password, setPassword] = React.useState('')

const handleSubmit = async() => {
    const payload = {
        user,
        password
    };
    await AsyncStorage.setItem('@USER_LOGIN', JSON.stringify(payload));
    Alert.alert('Cadastrado com sucesso')
}


    return <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View styles={styles.body}>
            <Text style={styles.text}>Usuário</Text>
            <TextInput style={styles.input} testID='user'
                placeholder='Digite seu email ou nome de usuário' onChangeText={(text) => setUser(text)}/>
            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} testID='password'
                placeholder='Digite sua senha' secureTextEntry onChangeText={(text) => setPassword(text)} />
        </View>
        <View styles={styles.footer}>
            <Button onPress={() => handleSubmit()} style={styles.button} title='Enviar' />
            <Button style={styles.button} title='Voltar' />
        </View>
    </View>
}


