import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Image, Text } from 'react-native';
import Logo from "../../assets/defaultLogo.png"
import globalStyles from '../../globalStyles';
import LoginForm from './LoginForm';
import SignupModal from './SignUpModal';

const Login = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View
      style={globalStyles.container}
    >
      <Image
        style={globalStyles.image}
        source={Logo}
        alt="logo Yoga Mangala"
      />
      <LoginForm navigation={navigation}/>
      <Text onPress={toggleModal}>Não possui conta? Crie uma aqui</Text>
      <SignupModal  isModalVisible={isModalVisible} toggleModal={toggleModal} navigation={navigation}/>
    </View>
  )
}

export default Login