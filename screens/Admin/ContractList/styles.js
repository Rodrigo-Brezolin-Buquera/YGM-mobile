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
        backgroundColor: colors.white,
        borderRadius: 25

    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius:25,
        padding: 5,
        paddingLeft:10
    }
  
  });

