import globalStyles from '../../../globalStyles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useLoginLogic } from "./useLoginLogic";
import { Controller } from 'react-hook-form';


const LoginForm = ({ navigation }) => {
    const { loading, passwordControl, formControls } = useLoginLogic()
    const { showPassword, setShowPassword } = passwordControl
    const { register, onSubmit, errors, isSubmitting } = formControls

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Controller
                    name="email"
                    control={register()}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                        />
                    )}
                />
                {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

                <Controller
                    name="password" 
                    control={register()} 
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(text) => onChange(text)}
                            value={value}
                            secureTextEntry={!showPassword}
                        />
                    )}
                />
                {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={onSubmit}
                    disabled={loading}
                >
                    <Text style={globalStyles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={styles.errorMessage}>
                Error Messages
            </Text> */}
        </View>
    );
};



export default LoginForm;
