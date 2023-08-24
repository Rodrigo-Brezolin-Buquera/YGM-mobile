import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import globalStyles from '../../../../globalStyles';

const CheckinCard = ({ checkin, capacity, setLoading }) => {
  const [cardLoading, setCardLoading] = useState(false);

  const onDelete = () => {
    };

  return (
    <View
      style={styles.card}
    >
      {cardLoading ? (
        <Text>Carregando</Text>
      ) : (
        <View style={styles.textContainer}>
          <Text style={globalStyles.normalText}>{checkin.name}</Text>
          <TouchableOpacity onPress={onDelete}>
            <Image source={require("../../../../assets/trashIcon.png")} style={styles.icon} />       
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CheckinCard;
