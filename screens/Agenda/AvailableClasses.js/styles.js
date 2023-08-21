import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../../globalStyles';


export const styles = StyleSheet.create({
    card: applyShadow({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: 200,
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    }),
    line: {
        textAlign: 'center'
    },
    label: {
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    listContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    }
});