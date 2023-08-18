import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export default StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:10,
        backgroundColor:colors.white
    },
    tabItem:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width:24,
        height:24
    },
    overlay:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 65,
        height:50
    },
    label:{
        fontSize:12
    }
});