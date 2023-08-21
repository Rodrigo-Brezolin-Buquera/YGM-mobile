import React from 'react'
import { Text, Modal } from 'react-native'

const CreateClassModal = ({ isModalVisible, toggleModal, navigation }) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isModalVisible}
    onRequestClose={toggleModal}
> 
<Text>Modal</Text>
</Modal>
  )
}

export default CreateClassModal