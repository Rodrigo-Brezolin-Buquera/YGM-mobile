import { View, Image } from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';

const Header = () => {
    return (
        <View style={styles.header}>
            <StatusBar></StatusBar>
            <Image
                source={require("../../assets/defaultLogo.png")} 
                style={styles.logo}
            />
        </View>
    );
};


export default Header;
