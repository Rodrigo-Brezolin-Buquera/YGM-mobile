import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import globalStyles from '../../../../globalStyles';
import SelectPicker from '../../../../components/SelectPicker';
import { durationOption, frequencyOptions } from '../../../../constants/plansOptions';

const CreatePlanModal = ({ isModalVisible, toggleModal }) => {
    const [frequency, setFrequency] = useState("")
    const [duration, setDuration] = useState("")
    const [price, setPrice] = useState("")


    const onSubmit = async (values) => { };

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
                        <Text style={globalStyles.modalHeader}>Detalhes do Plano</Text>
                        <View style={globalStyles.formControl}>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Valor"
                            // {...register('price', {
                            //     required: 'Campo Obrigatório',
                            //     // pattern: pricePattern
                            // })}
                            />
                            <SelectPicker
                                state={frequency}
                                setState={setFrequency}
                                list={frequencyOptions}
                                placeholder={"Frequência"}
                            />

                            <SelectPicker
                                state={duration}
                                setState={setDuration}
                                list={durationOption}
                                placeholder={"Duração"}
                            />

                        </View>
                        <TouchableOpacity
                            style={globalStyles.button}
                            nPress={() => toggleModal(false)}
                        >
                            <Text style={globalStyles.buttonText} >Adicionar</Text>
                        </TouchableOpacity>
                        {/* errors */}
                    </View>
                </View>

            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    formControl: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        // justifyContent: 'center',
        width: 300
    },



});

export default CreatePlanModal;
