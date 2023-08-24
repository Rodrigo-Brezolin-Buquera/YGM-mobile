import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import ContractDetails from "../../components/ContractDetails"
import { mockContracts } from "../../mockData"
import { useState } from 'react'
import CreateContractModal from './CreateContractModal'

const Contract = () => {
  const [contract, setContract] = useState(mockContracts[1])
  const [isModalVisible, seteModalVisible] = useState(false);

  const toggleModal = () => {
    seteModalVisible(!isModalVisible);
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


      <ContractDetails contract={contract} />
      <CreateContractModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  )
}

export default Contract