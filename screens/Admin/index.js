import { useState } from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import globalStyles from '../../globalStyles'

const Admin = ({ navigation }) => {
  const [view, setView] = useState(null);

  const ListView = () => {
    switch (view) {
      case 'users':
        return <Text>users</Text>;
      case 'contracts':
        return <Text>Contratos</Text>;
      default:
        return null;
    }
  };


  return (
    <View style={globalStyles.container} >
      <View style={ globalStyles.buttonContainer }>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => setView('users')}
        >
          <Text style={globalStyles.buttonText}  >Ativar contas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => setView('contracts')}
        >
          <Text style={globalStyles.buttonText}  >Usuários</Text>
        </TouchableOpacity>
      </View>


      <ListView />

    </View>
  )
}

export default Admin