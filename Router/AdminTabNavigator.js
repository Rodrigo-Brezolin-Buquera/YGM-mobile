import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Business from '../screens/Business';
import AdminStack from './AdminStack';
import AgendaStack from './ClassStack';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={AdminStack} />
      <Tab.Screen name="Agenda" component={AgendaStack} />
      <Tab.Screen name="Espaço" component={Business} />
    </Tab.Navigator>
  );
};

export default AdminTabsNavigator;
