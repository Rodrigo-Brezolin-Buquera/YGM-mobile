import { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { goToContract } from '../../../router/Coordinator';
import { styles } from '../styles';

const UserCard = ({ user, navigation }) => {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => goToContract(navigation, user.id)}
    >
      <Text style={styles.label}>{user.name}</Text>
      <View style={styles.line}>
        <Text >Primeiro acesso:</Text>
        <Text >{user.createdAt}</Text>

      </View>
    </TouchableOpacity>
  );
};



export default memo(UserCard);
