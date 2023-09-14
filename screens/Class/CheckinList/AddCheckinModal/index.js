import { useState } from 'react'
import { Text, Modal, View, TouchableOpacity, TextInput} from 'react-native'
import globalStyles from '../../../../globalStyles';
import {useInput} from "../../../../hooks/useInput"


const AddCheckinModal = ({ isModalVisible, toggleModal }) => {
  const [name, handleName] = useInput('');

  const addStudent = async () => {}
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}
    >
      <TouchableOpacity
        style={globalStyles.modalOverlay}
        activeOpacity={1}
        onPress={() => toggleModal(false)}
      >
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalForm}>
            <TextInput
                    value={name}
                    onChangeText={handleName}
                    placeholder="Nome"
                    style={globalStyles.input}
                />
      
            <TouchableOpacity
              style={globalStyles.button}
              onPress={() => toggleModal(false)}
              // disabled={loading}
            >
              <Text style={globalStyles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </TouchableOpacity>
    </Modal>
  )
}

export default AddCheckinModal