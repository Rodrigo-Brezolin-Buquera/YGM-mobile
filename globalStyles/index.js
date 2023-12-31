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
    elevation: 3,
};

export const applyShadow = (style) => {
    return { ...style, ...shadowStyles };
};

export const selectedButtonStyle = (isSelected) => {
    return { backgroundColor: isSelected ? colors.lightCian : colors.yellow }

}

export const selectedTabButtonTextStyle = (isSelected) => {
    return { fontWeight: isSelected ? "bold" : "none" }
}

export const selectedTabButtonStyle = (isSelected) => {
    return {
        borderBottomWidth: isSelected ? 3 : 0,
        borderBottomColor: isSelected ? colors.yellow : 'transparent',
        borderBottomLeftRadius: isSelected ? 5 : 0,  
        borderBottomRightRadius: isSelected ? 5 : 0,
    }
}

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '10em',
        justifyContent: 'flex-start',
        backgroundColor: colors.grey,
        position: "relative"
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 40,
        width: "100%"
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.black,
        width: "100%",
        gap: 30
    },
    bottomCotainter: {
        position: "absolute",
        bottom: 0
    },
    textContainer: applyShadow({
        backgroundColor: colors.white,
        borderRadius:10
    }),
    tabButton: {
        padding: 3,
        paddingBottom: 0,
        alignItems: 'center',
    },
    button: applyShadow({
        backgroundColor: colors.yellow,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    }),
    tabButtonText: {
        color: colors.white,
        fontSize: 18,
    },
    buttonText: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18
    },
    input: {
        marginBottom: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 10,
        minHeight: 50,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 4
    },
    inputText: {
        paddingLeft: 18,
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
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 4
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 18,
    },
});