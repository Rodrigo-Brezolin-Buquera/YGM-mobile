import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import { simplifyDate } from '../../../utils/dates';
import {styles} from './styles';

const ClassDetails = ({ yogaClass }) => {
  return (
    <View style={[styles.container, globalStyles.textContainer]}>
      <Text style={[globalStyles.boldText, styles.gap]}>
        {yogaClass.day} - {yogaClass.time}
      </Text>
      <Text style={[globalStyles.normalText, styles.gap]}> Data: {simplifyDate(yogaClass.date)} </Text>
      <Text style={[globalStyles.normalText, styles.gap]}> Prof: {yogaClass.teacher} </Text>
      <Text style={[globalStyles.normalText, styles.gap]}> Estilo: {yogaClass.name} </Text>
    </View>
  );
};

export default ClassDetails;
