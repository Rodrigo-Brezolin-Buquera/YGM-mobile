import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import globalStyles from '../../../globalStyles';

const SignupModal = ({ isModalVisible, toggleModal, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepetPassword, setShowRepetPassword] = useState(false);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
        >
            <TouchableOpacity
                style={globalStyles.modalOverlay}
                activeOpacity={1}
                onPress={() => toggleModal(false)}
            >
                <View style={globalStyles.modalContainer}>
                    <View style={globalStyles.modalForm}>
                        <Text style={globalStyles.modalHeader}>Preencha seu cadastro</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Nome completo"
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Email"
                        />
                        {/* PasswordInput */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Senha"
                            secureTextEntry={!showPassword}
                        />
                        {/* PasswordInput */}
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Repita sua senha"
                            secureTextEntry={!showRepetPassword}
                        />
                        {/* FormErrorMessage */}
                        <TouchableOpacity
                            style={globalStyles.button}
                            onPress={() => toggleModal(false)}
                            disabled={loading}
                        >
                            <Text style={globalStyles.buttonText}>Criar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableOpacity>
        </Modal>
    );
};




export default SignupModal;
