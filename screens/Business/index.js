import {useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle } from '../../globalStyles'

const Business = () => {
  const [view, setView] = useState(null);

  const BusinessView = () => {
    switch (view) {
      case 'local':
        return  <Text>Local</Text>
      case 'teacher/styles':
        return <Text>teacher/styles</Text>
        case 'plans':
        return <Text>plans</Text>
      default:
        return <Text>nada</Text>
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
          <Text style={globalStyles.buttonText}  >teacher/styles</Text>
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