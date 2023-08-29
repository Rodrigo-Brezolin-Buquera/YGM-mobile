import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../globalStyles';


export const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderRadius: 25,
        height: 40,
        width:280,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 4,
        backgroundColor: colors.white   
     },
        circularButton: applyShadow({
            width:40,
            height:40,
            backgroundColor: colors.yellow,
            padding: 5,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: "center",
            marginBottom:12
        }),
        circularButtonText: {
            fontSize: 18,
            fontWeight:"bold"
        },
        flexContainer:{
            flexDirection: "row",
            justifyContent:"space-between",
            alignItems:"center",
            gap: 5,
            height:50
        }
 
});

