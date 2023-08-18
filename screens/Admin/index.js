import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import { goToClass, goToUser } from '../../Router/Coordinator'

const Admin = ({navigation}) => {
  return (
    <View style={globalStyles.container} >
      <Text>Admin</Text>

      <TouchableOpacity
        style={globalStyles.formButton}
        onPress={() => goToUser(navigation)}
      >
        <Text style={globalStyles.buttonText}  >Ir pra user</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.formButton}
        onPress={() => goToClass(navigation)}
      >
        <Text style={globalStyles.buttonText}  >Ir pra class</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Admin