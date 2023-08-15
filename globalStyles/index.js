import { StyleSheet } from 'react-native';

export const colors = {
    cian: "#62B6B7",
    yellow: "#F3C046",
    black: "#2D3748",
    grey: "#f2f3f7",
    white: "#fafafa",
}

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '10em',
        justifyContent: 'center',
        backgroundColor: colors.grey,
        minHeight: '100%',
    },
    image: {
        maxWidth: 300,
        maxHeight: 300
    },
    formButton: {
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.black,
        fontWeight: 'bold'
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
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
    },  

});