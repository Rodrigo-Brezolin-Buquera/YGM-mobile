import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../../globalStyles';


export const styles = StyleSheet.create({
     centralContainer: {
      width: '100%',
      paddingHorizontal:20
    },
    card: applyShadow({
      minWidth: 100,
      minHeight: 40,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.yellow,
      padding: 8,
      borderRadius: 20,
      marginHorizontal:10,
      marginVertical:5
    }),
    label:{
      fontSize:16,
      fontWeight:"bold",
      marginBottom:2,
      marginTop:10
    },
    cardText:{
      fontSize:14,
      fontWeight:"bold",
    }, 
    icon:{
      width:20,
      height:20
  },

  });