import {useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle } from '../../globalStyles'
import Local from './Local';
import { Plans } from './Plans';
import TeachersAndStyles from './TeachersAndStyles';

const Business = () => {
  const [view, setView] = useState(null);

  const BusinessView = () => {
    switch (view) {
      case 'local':
        return  <Local/>
      case 'teacher/styles':
        return <TeachersAndStyles/>
        case 'plans':
        return <Plans/>
      default:
        return null
    }
  };

  return (
      <View style={globalStyles.container} >
        <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "local")
          ]}
          onPress={() => setView('local')}
        >
          <Text style={globalStyles.buttonText}  >Local</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === 'teacher/styles')
          ]}
          onPress={() => setView('teacher/styles')}
        >
          <Text style={globalStyles.buttonText}  >Estilos</Text>
        </TouchableOpacity >

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "plans")
          ]}
          onPress={() => setView('plans')}
        >
          <Text style={globalStyles.buttonText}  >Planos</Text>
        </TouchableOpacity>
      </View>
          <BusinessView/>
      </View>
  )
}

export default Business