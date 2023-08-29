import { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { goToContract } from '../../../router/Coordinator';
import { adminStyles } from '../adminStyles';

const UserCard = ({ user, navigation }) => {

  return (
    <TouchableOpacity
      style={adminStyles.card}
      onPress={() => goToContract(navigation, user.id)}
    >
      <Text style={adminStyles.label}>{user.name}</Text>
      <View style={adminStyles.line}>
        <Text >Primeiro acesso:</Text>
        <Text >{user.createdAt}</Text>

      </View>
    </TouchableOpacity>
  );
};



export default memo(UserCard);
