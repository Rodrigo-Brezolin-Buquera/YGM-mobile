import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../../../globalStyles';

export const styles = StyleSheet.create({
    card: applyShadow({
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.yellow,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            width:300
    }),
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    icon:{
        width:32,
        height:32
    }
  
});