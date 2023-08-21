import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';


export const agendaStyles = StyleSheet.create({
    circularCard: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 25,
        width:  120,
        padding: 5,
    },
    cianCard: {
        backgroundColor: colors.lightCian,
    },
    yellowCard: {
        backgroundColor: colors.yellow,
    }

  });