import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { colors } from '../../globalStyles'
import UserList from './UserList';

const Admin = () => {
  const [view, setView] = useState(null);

  const ListView = () => {
    switch (view) {
      case 'users':
        return <UserList />
      case 'contracts':
        return <Text>Contratos</Text>;
      default:
        return null;
    }
  };



  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity
          style={[
            globalStyles.button,
            { backgroundColor: view === "users" ? colors.cian : globalStyles.button.backgroundColor }
          ]}
          onPress={() => setView('users')}
        >
          <Text style={globalStyles.buttonText}  >Ativar contas</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[
            globalStyles.button,
            { backgroundColor: view === "contracts" ? colors.cian : globalStyles.button.backgroundColor }
          ]}
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