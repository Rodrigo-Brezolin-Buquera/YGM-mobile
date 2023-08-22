import { StyleSheet } from 'react-native';

export const colors = {
    cian: "#62B6B7",
    lightCian: "#85c6c7",
    yellow: "#F3C046",
    black: "#2D3748",
    grey: "#f2f3f7",
    white: "#fafafa",
}

const shadowStyles = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
};

export const applyShadow = (style) => {
    return { ...style, ...shadowStyles };
};

export const selectedButtonStyle = (boolean) => {
    return { backgroundColor: boolean ? colors.lightCian : colors.yellow}

} 


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '10em',
        justifyContent: 'flex-start',
        backgroundColor: colors.grey,
        minHeight: '100%',
    },
    wrapContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      }, 
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 40,
        width: "100%"
    },

    button: applyShadow({
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    }),
    buttonText: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize:18
    },
    input: {
        marginBottom: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        minHeight:50,
        display:"flex",
        justifyContent:"center",
        paddingLeft:4

    },
    inputText: {
        paddingLeft:18,
        fontSize: 16
    },
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center' 
    },
    modalForm: {
        width: '80%',
        backgroundColor: colors.grey,
        padding: 16,
        borderRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
});