import { StatusBar } from 'expo-status-bar';
import AreaView from './components/AreaView';
import Routes from './Router/Routes';

export default function App() {
  return (
    <>
      <AreaView>
        <Routes />
      </AreaView>
    </>
  );
}


