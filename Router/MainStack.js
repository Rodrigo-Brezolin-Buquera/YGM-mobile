import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import AdminTabNavigator from './AdminTabNavigator';
import User from '../screens/User';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
 
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Admin" component={AdminTabNavigator} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
  )
}

export default MainStack