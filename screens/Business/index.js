import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedTabButtonStyle, selectedTabButtonTextStyle } from '../../globalStyles'
import Local from './Local';
import { Plans } from './Plans';

const Business = () => {
  const [view, setView] = useState("local");

  const BusinessView = () => {
    switch (view) {
      case 'local':
        return <Local />
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