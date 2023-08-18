import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import { goToClass } from '../../Router/Coordinator'

const Agenda = ({navigation}) => {
  return (
    <View style={globalStyles.container} >
      <Text>Agenda</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => goToClass(navigation)}
      >
        <Text style={globalStyles.buttonText}  >Ir pra class</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Agenda