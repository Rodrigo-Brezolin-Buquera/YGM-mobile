import React, { useState } from 'react';
import globalStyles from '../../../globalStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { goToAdmin, goToUser } from '../../../router/Coordinator';

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
                    style={globalStyles.button}
                    // onPress={()=>goToAdmin(navigation)}
                    // onPress={()=>goToUser(navigation , 1)}
                    disabled={loading}
                >
                    <Text style={globalStyles.buttonText}  >Acessar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.errorMessage}>
                {/* Error Messages*/}
            </Text>
        </View>
    );
};



export default LoginForm;
