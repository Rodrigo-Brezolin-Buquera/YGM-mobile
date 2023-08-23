import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { memo } from 'react';
import globalStyles from '../../globalStyles';
import { styles } from './styles';

const ContractDetails = ({ contract }) => {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.line, styles.gap]}>
        <Text style={globalStyles.boldText}>Nome:</Text>
        <Text style={globalStyles.normalText}>{contract?.name}</Text>
      </View>

      <View style={[globalStyles.line, styles.gap]}>
        <Text style={globalStyles.boldText}>Plano: </Text>
        <Text style={globalStyles.normalText}>{contract?.plan}</Text>
      </View>

      <View style={[globalStyles.line, styles.gap]}>
        <Text style={globalStyles.boldText}>Início: </Text>
        <Text style={globalStyles.normalText}> {contract?.started}</Text>
      </View>

      {contract?.availableClasses !== null && (
        <>
          <View style={[globalStyles.line, styles.gap]}>
            <Text style={globalStyles.boldText}>Fim previsto: </Text>
            <Text style={globalStyles.normalText}>{contract?.ends}</Text>
          </View>
          <View style={[globalStyles.line, styles.gap]}>
            <Text style={globalStyles.boldText}>Aulas disponíveis:</Text>
            <Text style={globalStyles.normalText}>{contract?.availableClasses}</Text>
          </View>
        </>
      )}
    </View>
  );
};



export default memo(ContractDetails);
