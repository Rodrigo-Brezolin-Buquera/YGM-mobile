import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';


export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.black, 
        height: 60, 
        paddingHorizontal: 15,
        width:"100%"
    },
    logo: {
        width: 110, 
        height: 50
        }
});

