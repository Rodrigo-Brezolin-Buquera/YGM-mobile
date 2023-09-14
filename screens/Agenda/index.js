import { useState } from 'react'
import { Text, View, TouchableOpacity  } from 'react-native'
import globalStyles, { selectedTabButtonStyle, selectedTabButtonTextStyle } from '../../globalStyles'
import { agendaStyles } from './agendaStyles';
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
      <View style={globalStyles.tabContainer}>
     
        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "today")
          ]}
          onPress={() => setView('today')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "today") 
            ]}> Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "week")
          ]}
          onPress={() => setView('week')}
        >
          <Text style={[globalStyles.tabButtonText,  selectedTabButtonTextStyle(view === "week")]}  >Semana</Text>
        </TouchableOpacity>
      </View>
   
      <ClassesView />
      <CreateClassModal isModalVisible={isModalVisible} toggleModal={toggleModal} navigation={navigation} />

      <View style={agendaStyles.absoluteContainer} >
      <TouchableOpacity
          style={agendaStyles.circularButton}
          onPress={toggleModal}
          >
          <Text style={agendaStyles.circularButtonText}  >+</Text>
        </TouchableOpacity>
          </View>
    </View>
  )
}

export default Agenda