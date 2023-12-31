import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../../globalStyles';


export const styles = StyleSheet.create({
    card: applyShadow({
        width: 160,
        height: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.yellow,
        padding: 8,
        borderRadius: 20,
        marginHorizontal: 5,
        marginVertical: 5
    }),
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: 70,
        paddingHorizontal: 8,
    },
    icon: {
        width: 32,
        height: 32
    },
    label:{
        fontSize:15,
        fontWeight: 'bold' 
    },
    columnContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        paddingBottom: 10
      
    },

});