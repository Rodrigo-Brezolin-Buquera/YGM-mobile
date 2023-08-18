import { View, Image } from 'react-native';
import { styles } from './styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require("../../assets/defaultLogo.png")} 
                style={styles.logo}
            />
        </View>
    );
};


export default Header;
