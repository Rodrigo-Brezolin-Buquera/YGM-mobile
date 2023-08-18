import { StyleSheet } from 'react-native';
import { colors } from '../../../globalStyles';


export const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius:10,
        padding: 5,
        paddingLeft:10
    }
  
  });

