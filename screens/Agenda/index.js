import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle } from '../../globalStyles'
import AvailableClasses from './AvailableClasses.js';
import Calendar from './Calendar';
import CreateClassModal from './CreateClassModal.js';

const Agenda = ({ navigation }) => {
  const [view, setView] = useState("today");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const ClassesView = () => {
    switch (view) {
      case 'today':
        return <AvailableClasses navigation={navigation} />
      case 'week':
        return <Calendar navigation={navigation} />;
      default:
        return <AvailableClasses />;
    }
  };


  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={toggleModal}
        >
          <Text style={globalStyles.buttonText}  >Nova aula</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "today")
          ]}
          onPress={() => setView('today')}
        >
          <Text style={globalStyles.buttonText}  >Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "week")
          ]}
          onPress={() => setView('week')}
        >
          <Text style={globalStyles.buttonText}  >Semana</Text>
        </TouchableOpacity>
      </View>

      <ClassesView />
      <CreateClassModal isModalVisible={isModalVisible} toggleModal={toggleModal} navigation={navigation} />

    </View>
  )
}

export default Agenda