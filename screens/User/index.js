import { useState } from 'react'
import Header from "../../components/Header"
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle } from '../../globalStyles'
import AvailableClasses from './AvailableClasses.js'

const User = () => {
  const [view, setView] = useState("classes");


  const UserView = () => {
    switch (view) {
      case 'classes':
        return <AvailableClasses/>
      case 'account':
        return <Text>account</Text>
      default:
        return <Text>Classes</Text>;
    }
  };



  return (
    <View style={globalStyles.container} >
      <Header />
      <View style={globalStyles.buttonContainer}>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "classes")
          ]}
          onPress={() => setView('classes')}
        >
          <Text style={globalStyles.buttonText}>Aulas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.button,
            selectedButtonStyle(view === "account")
          ]}
          onPress={() => setView('account')}
        >
          <Text style={globalStyles.buttonText}>Conta</Text>
        </TouchableOpacity>
      </View>
          <UserView/>
    </View>
  )
}

export default User