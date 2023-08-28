import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedButtonStyle, selectedTabButtonStyle, selectedTabButtonTextStyle } from '../../globalStyles'
import ContractList from './ContractList';
import UserList from './UserList';

const Admin = () => {
  const [view, setView] = useState(null);

  const ListView = () => {
    switch (view) {
      case 'users':
        return <UserList />
      case 'contracts':
        return <ContractList />;
      default:
        return null;
    }
  };

  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.tabContainer}>
        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "users")
          ]}
          onPress={() => setView('users')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "users")
          ]}  >Ativar contas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "contracts")
          ]}
          onPress={() => setView('contracts')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "contracts")

            ]}  >Usuários</Text>
        </TouchableOpacity>
      </View>


      <ListView />
    </View>
  )
}

export default Admin