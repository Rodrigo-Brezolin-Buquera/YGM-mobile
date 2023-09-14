import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from '../screens/Admin';
import Contract from '../screens/Contract';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeAdmin" component={Admin} />
        <Stack.Screen name="Contract" component={Contract} />

      </Stack.Navigator>
  )
}
export default AdminStack