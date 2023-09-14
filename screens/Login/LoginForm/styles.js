import { StyleSheet } from 'react-native';
import { colors } from '../../../globalStyles';



export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
        backgroundColor: colors.lightCian,
        borderRadius: 25,
        width: 300,
    },
    form: {
        width: '100%',
    },
    input:{
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.grey
    },
    errorMessage: {
        color: 'red',
        marginTop: 10,
        fontSize: 12,
    }
})
