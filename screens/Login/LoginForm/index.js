import React, { useState } from 'react';
import globalStyles from '../../../globalStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { goToAdmin } from '../../../Router/Coordinator';

const LoginForm = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    placeholder="Email"
                    style={globalStyles.input}
                />
                <TextInput
                    placeholder="Senha"
                    style={globalStyles.input}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={globalStyles.formButton}
                    onPress={() => { }}
                    disabled={loading}
                >
                    <Text style={globalStyles.buttonText} onPress={()=>goToAdmin(navigation)} >Acessar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.errorMessage}>
                {/* Error Messages*/}
            </Text>
        </View>
    );
};



export default LoginForm;
