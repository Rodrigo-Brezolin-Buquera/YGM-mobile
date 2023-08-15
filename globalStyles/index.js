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
    }
});