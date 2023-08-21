import { useState } from 'react'
import { Text, Modal, View, TouchableOpacity, TextInput, Button } from 'react-native'
import globalStyles from '../../../globalStyles'
import { getToday } from '../../../utils/dates';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectPicker from '../../../components/SelectPicker';
import { dayOptions } from '../../../constants/dayOptions';
import { stylesOptions } from '../../../constants/stylesOptions';
import { teachersOptions } from '../../../constants/teachersOptions';


const CreateClassModal = ({ isModalVisible, toggleModal, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [style, setStyle] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [day, setDay] = useState(null);


  const handleDateChange = (event, selected) => {
    const currentDate = selected || selectedDate;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  const handleTimeChange = (event, selected) => {
    const currentTime = selected || selectedTime;
    setShowTimePicker(false);
    setSelectedTime(currentTime);
  };


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
            <Text style={globalStyles.modalHeader}>Detalhes da aula</Text>

            <SelectPicker
              state={day}
              setState={setDay}
              list={dayOptions}
              placeholder={"Escolha um dia"}
            />

            <SelectPicker
              state={style}
              setState={setStyle}
              list={stylesOptions}
              placeholder={"Escolha um estilo"}
            />

            <SelectPicker
              state={teacher}
              setState={setTeacher}
              list={teachersOptions}
              placeholder={"Escolha um professor"}
            />

            <TouchableOpacity
              style={globalStyles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={globalStyles.inputText}  >   { selectedDate.toISOString() || "Escolha um dia"}</Text>
            </TouchableOpacity>
            
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
              onPress={() => setShowTimePicker(true)}
            >
              <Text style={globalStyles.inputText}  >Escolha um horário</Text>
            </TouchableOpacity>

            {showTimePicker && (
              <DateTimePicker
                value={selectedTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleTimeChange}
              />
            )}

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
  )
}

export default CreateClassModal