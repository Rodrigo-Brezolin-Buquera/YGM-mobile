import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import ContractDetails from "../../components/ContractDetails"
import { mockContracts } from "../../mockData"
import { useState } from 'react'

const Contract = () => {
  const [iseModalVisible, seteModalVisible] = useState(false);

  const toggleModal = () => {
    seteModalVisible(!iseModalVisible);
  };

  return (
    <View style={globalStyles.container} >
      <View style={globalStyles.buttonContainer}>
      
        <TouchableOpacity
          style={globalStyles.button}
          onPress={toggleModal}
        >
          <Text style={globalStyles.buttonText}>Novo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>


      <ContractDetails contract={mockContracts[1]} />
    </View>
  )
}

export default Contract