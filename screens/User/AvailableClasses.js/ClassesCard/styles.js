import {StyleSheet} from "react-native"
import { applyShadow, colors } from "../../../../globalStyles"


export const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
      position: 'relative',
      width:"100%",
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
    },
    actionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: colors.yellow,
      paddingVertical: 6,
      paddingHorizontal: 16,
      position: 'absolute',
      right: 0,
      bottom: 0,
      width:150
    },
    actionText: {
      fontSize: 17,
      fontWeight:"bold"
    },
    iconContainer: {
      borderWidth: 1.2,
      borderColor: 'black',
      width: 30,
      height: 30,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: applyShadow({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        width: 250,
        height:125,
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
    }),
    icon:{
        width:16,
        height:16
    }
  })