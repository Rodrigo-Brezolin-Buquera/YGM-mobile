import { StyleSheet } from 'react-native';
import { colors } from '../../../globalStyles';



export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        backgroundColor: colors.white,
        borderRadius: 25,
        width: 300,
    },
    form: {
        width: '100%',
    },
 
    errorMessage: {
        color: 'red',
        marginTop: 10,
        fontSize: 12,
    }
})