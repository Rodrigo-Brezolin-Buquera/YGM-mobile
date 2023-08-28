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

      <ContractDetails contract={contract} />

      <View style={[globalStyles.buttonContainer, globalStyles.bottomCotainter]}>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={toggleModal}
        >
          <Text style={globalStyles.buttonText}>Novo Plano</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
      <CreateContractModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  )
}

export default Contract