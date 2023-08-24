import { StatusBar } from 'expo-status-bar';
import AreaView from './components/AreaView';
import Routes from './router/Routes';

export default function App() {
  return (
    <>
      <AreaView>
        <Routes />
      </AreaView>
    </>
  );
}


