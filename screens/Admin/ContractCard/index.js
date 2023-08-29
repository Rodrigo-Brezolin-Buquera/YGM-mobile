import { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { goToContract } from '../../../router/Coordinator';
import { adminStyles } from '../adminStyles';

const ContractCard = ({ contract, navigation }) => {

  return (
    <TouchableOpacity
      style={adminStyles.card}
      onPress={() => goToContract(navigation, contract.id)}
    >
      <Text style={adminStyles.label}>{contract.name}</Text>
      <View style={adminStyles.line}>
        <Text >{contract.plan}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default memo(ContractCard);
