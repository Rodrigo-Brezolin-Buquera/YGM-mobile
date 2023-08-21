import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../globalStyles';


export const agendaStyles = StyleSheet.create({
    circularCard: applyShadow ({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 25,
        width:  120,
        padding: 5,
    }),
    cianCard: {
        backgroundColor: colors.lightCian,
        marginBottom:20
    },
    yellowCard: {
        backgroundColor: colors.yellow,
        marginBottom:10
    }

  });