import { useState } from 'react'
import Header from "../../components/Header"
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles, { selectedTabButtonStyle, selectedTabButtonTextStyle } from '../../globalStyles'
import AvailableClasses from './AvailableClasses.js'
import ContractDetails from '../../components/ContractDetails'
import { mockContracts } from '../../mockData'

const User = () => {
  const [view, setView] = useState("classes");


  const UserView = () => {
    switch (view) {
      case 'classes':
        return <AvailableClasses />
      case 'account':
        return <ContractDetails contract={mockContracts[1]} />
      default:
        return <Text>Classes</Text>;
    }
  };

  return (
    <View style={globalStyles.container} >
      <Header />
      <View style={globalStyles.tabContainer}>

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "classes")
          ]}
          onPress={() => setView('classes')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "classes")]}>Aulas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.tabButton,
            selectedTabButtonStyle(view === "account")
          ]}
          onPress={() => setView('account')}
        >
          <Text style={[
            globalStyles.tabButtonText,
            selectedTabButtonTextStyle(view === "account")]}
          >Conta</Text>
        </TouchableOpacity>
      </View>
      <UserView />
    </View>
  )
}

export default User