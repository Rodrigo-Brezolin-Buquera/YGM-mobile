import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from '../screens/Admin';
import Contract from '../screens/Contract';
import Class from '../screens/Class';


const Stack = createNativeStackNavigator();


const AdminStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Admin} />
        <Stack.Screen name="Contract" component={Contract} />
        <Stack.Screen name="Class" component={Class} />

      </Stack.Navigator>
  )
}
export default AdminStack