import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';


export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.black,
        height: 60,
        paddingHorizontal: 15,
        width: "100%"
    },
    logo: {
        width: 110,
        height: 50
    },
    icon: {
        width: 32,
        height: 32
    }
});

