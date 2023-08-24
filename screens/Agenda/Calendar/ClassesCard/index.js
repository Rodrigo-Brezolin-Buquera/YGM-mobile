import { Text, TouchableOpacity } from 'react-native';
import { memo } from 'react';
import { agendaStyles } from '../../agendaStyles';
import { goToClass } from '../../../../router/Coordinator';
import { styles } from './styles';

const ClassCard = ({ yogaClass, navigation }) => {

    return (
        <TouchableOpacity
            style={[agendaStyles.circularCard, agendaStyles.yellowCard]}
            onPress={() => goToClass (navigation, yogaClass.id)}
        >
            <Text style={styles.label}>{yogaClass?.time}</Text>
            <Text style={styles.text}>Vagas: {yogaClass?.capacity}</Text>
        </TouchableOpacity>
    );
};

export default memo(ClassCard);
