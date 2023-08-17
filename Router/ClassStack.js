import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Class from '../screens/Class';
import Agenda from '../screens/Agenda';


const Stack = createNativeStackNavigator();


const AgendaStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Class" component={Class} />

      </Stack.Navigator>
  )
}
export default AgendaStack