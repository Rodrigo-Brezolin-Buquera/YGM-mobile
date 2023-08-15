import React, { useState } from 'react';
import globalStyles from '../../../globalStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginForm = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={globalStyles.formButton}
                    onPress={() => { }}
                    disabled={loading}
                >
                    <Text style={globalStyles.buttonText} >Acessar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.errorMessage}>
                {/* Error Messages*/}
            </Text>
        </View>
    );
};



export default LoginForm;
