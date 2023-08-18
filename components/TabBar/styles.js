import { StyleSheet } from 'react-native';
import { colors } from '../../globalStyles';

export default StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.white
    },
    tabItem:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        width:32,
        height:32
    },
    overlay:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 70,
        height:60
    }
});