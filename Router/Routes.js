import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}
