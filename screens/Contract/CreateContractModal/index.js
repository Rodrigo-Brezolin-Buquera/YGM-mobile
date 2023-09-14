import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import SelectPicker from '../../../components/SelectPicker';
import { planOptions } from '../../../constants/plansOptions';
import globalStyles from '../../../globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';


const CreateContractModal = ({ isModalVisible, toggleModal }) => {
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [plan, setPlan] = useState("");

    const handleDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;
        setShowDatePicker(false);
        setSelectedDate(currentDate);
      };

    const onSubmit = () => { };

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
                        <Text style={globalStyles.modalHeader}>Novo Contrato</Text>

                        <SelectPicker
                            state={plan}
                            setState={setPlan}
                            list={planOptions}
                            placeholder={"Escolha um plano"}
                        />

                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={handleDateChange}
                            // minimumDate={}
                            // maximumDate
                            />
                        )}

                        <TouchableOpacity
                            style={globalStyles.input}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={globalStyles.inputText}  >Data de ínicio</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={globalStyles.button}
                            onPress={onSubmit}
                        >
                            <Text style={globalStyles.buttonText} >Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>



        </Modal >
    );
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    formControl: {
        marginBottom: 10,
        width: '100%',
    },
    formLabel: {
        marginBottom: 5,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    select: {
        height: 40,
        width: '100%',
    },
});

export default CreateContractModal;
