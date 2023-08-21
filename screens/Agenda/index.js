import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { colors } from '../../globalStyles'
import CreateClassModal from './CreateClassModal.js';

const Agenda = ({ navigation }) => {
  const [view, setView] = useState("Today");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={[
            globalStyles.button,
          ]}
          onPress={toggleModal}       
        >
          <Text style={globalStyles.buttonText}  >Nova aula</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: view === "Today" ? colors.lightCian : globalStyles.button.backgroundColor }
          ]}
          onPress={() => setView('Today')}
        >
          <Text style={globalStyles.buttonText}  >Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: view === "Week" ? colors.lightCian : globalStyles.button.backgroundColor }
          ]}
          onPress={() => setView('Week')}
        >
          <Text style={globalStyles.buttonText}  >Semana</Text>
        </TouchableOpacity>
      </View>


      <CreateClassModal  isModalVisible={isModalVisible} toggleModal={toggleModal} navigation={navigation}/>

    </View>
  )
}

export default Agenda