import React, { useState } from 'react';
import { TextInput } from 'react-native';
import globalStyles from '../../globalStyles';


const RequestInput = ({ placeholder, setLoading }) => {
  const [text, setText] = useState('');

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
        console.log(text)
    }
  };

  const onChange = (newText) => setText(newText);

  return (
    <TextInput
      style={globalStyles.input}
      onChangeText={onChange}
      onKeyPress={handleKeyPress}
      value={text}
      placeholder={placeholder}
      autoFocus
    />
  );
};

export default RequestInput;
