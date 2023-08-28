import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require("../../assets/defaultLogo.png")}
                style={styles.logo}
            />

            <TouchableOpacity
             onPress={()=>{}}
             onLongPress={()=>{}}
            >

                <Image
                    source={require("../../assets/logoutIcon.png")}
                    style={styles.icon}
                    onPress

                />
            </TouchableOpacity>
        </View>
    );
};


export default Header;
