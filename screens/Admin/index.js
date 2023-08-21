import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle } from '../../globalStyles'
import ContractList from './ContractList';
import UserList from './UserList';

const Admin = () => {
  const [view, setView] = useState(null);

  const ListView = () => {
    switch (view) {
      case 'users':
        return <UserList />
      case 'contracts':
        return <ContractList/>;
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
            selectedButtonStyle(view === "users")
          ]}
          onPress={() => setView('users')}
        >
          <Text style={globalStyles.buttonText}  >Ativar contas</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={[
            globalStyles.button,
            selectedButtonStyle(view === "contracts")
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