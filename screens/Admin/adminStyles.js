import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../globalStyles';


export const adminStyles = StyleSheet.create({
    card: applyShadow({
      flexDirection: 'column',
      padding: 8,
      borderRadius: 10,
      minWidth: '90%',
      backgroundColor: colors.white, 
      gap:2,
      marginVertical:4
    }),
    label: {
      fontWeight: 'bold',
      fontSize:18
    },
    line: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 4
  },
    userContainer: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      gap:10
    },
    gap:{
      gap: 5
    }
  });