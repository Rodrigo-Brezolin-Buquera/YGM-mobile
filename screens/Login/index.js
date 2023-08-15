import React from 'react'
import { View, Image, Text } from 'react-native';
import Logo from "../../assets/defaultLogo.png"
import globalStyles from '../../globalStyles';

const Login = () => {
  return (
    <View
      style={globalStyles.container}
    >
      <Image
        style={globalStyles.image}
        source={Logo}
        alt="logo"
      />
      {/* Your LoginForm component */}
      <Text>Não possui conta? Crie uma aqui</Text>
      {/* Your SignupModal component */}
    </View>
  )
}

export default Login