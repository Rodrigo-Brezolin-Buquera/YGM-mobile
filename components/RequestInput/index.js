import React, { useState } from 'react';
import { TextInput, TouchableOpacity , Text, View} from 'react-native';
import { styles } from './styles';


const RequestInput = ({ placeholder, setLoading }) => {
  const [text, setText] = useState('');

  const onPress = () => {

  };

  const onChange = (newText) => setText(newText);

  return (
    <View style={styles.flexContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={text}
        placeholder={placeholder}
        autoFocus
      />
      <TouchableOpacity
        style={styles.circularButton}
        onPress={onPress}
      >
        <Text style={styles.circularButtonText} >+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestInput;
