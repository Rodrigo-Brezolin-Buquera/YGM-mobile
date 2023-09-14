import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Business from '../screens/Business';
import AdminStack from './AdminStack';
import AgendaStack from './ClassStack';
import TabBar from '../components/TabBar';
import Header from "../components/Header"

const Tab = createBottomTabNavigator();

const AdminTabsNavigator = () => {
  return (
  <>
    <Header/>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={AdminStack} />
      <Tab.Screen name="Agenda" component={AgendaStack} />
      <Tab.Screen name="Espaço" component={Business} />
    </Tab.Navigator>
  
  </>
  );
};

export default AdminTabsNavigator;
