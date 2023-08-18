import { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { goToContract } from '../../../Router/Coordinator';
import { styles } from '../styles';

const ContractCard = ({ contract, navigation }) => {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToContract(navigation, contract.id)}
    >
      <Text style={styles.label}>{contract.name}</Text>
      <View style={styles.line}>
        <Text >{contract.plan}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default memo(ContractCard);
