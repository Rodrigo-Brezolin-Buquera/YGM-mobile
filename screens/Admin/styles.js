import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../globalStyles';


export const styles = StyleSheet.create({
    card: applyShadow({
      flexDirection: 'column',
      padding: 8,
      borderRadius: 10,
      minWidth: 300,
      width: '100%',
      backgroundColor: colors.white, 
      gap:2,
      marginVertical:4
    }),
    line: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 4 
    },
    label: {
      fontWeight: 'bold',
      fontSize:18
    }
  });