import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle, selectedTabButtonStyle, selectedTabButtonTextStyle } from '../../globalStyles'
import Local from './Local';
import { Plans } from './Plans';
import TeachersAndStyles from './TeachersAndStyles';

const Business = () => {
  const [view, setView] = useState("local");

  const BusinessView = () => {
    switch (view) {
      case 'local':
        return <Local />
      case 'teacher/styles':
        return <TeachersAndStyles />
      case 'plans':
        return <Plans />
      default:
        return null
    }
  };

  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.tabContainer}>
        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "local")
          ]}
          onPress={() => setView('local')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "local")]
          }  >
            Local</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === 'teacher/styles')
          ]}
          onPress={() => setView('teacher/styles')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === 'teacher/styles')
          ]}
          >Estilos</Text>
        </TouchableOpacity >

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "plans")
          ]}
          onPress={() => setView('plans')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "plans"
            )
          ]}  >Planos</Text>
        </TouchableOpacity>
      </View>
      <BusinessView />
    </View>
  )
}

export default Business