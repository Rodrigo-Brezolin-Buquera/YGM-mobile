
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../../globalStyles';
import { styles } from './styles';

const AreaView = ({ children }) => {
    return <>
        <SafeAreaView style={styles.topAreaView}>
            <StatusBar backgroundColor={colors.black} />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.keyBoardView}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
        <SafeAreaView style={styles.bottomAreaView} />
    </>
}

export default AreaView