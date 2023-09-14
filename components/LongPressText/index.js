import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const LongPressText = (props) => {
  const [text, setText] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  const handleKeyPress = (e) => {
  
  };

  const onChange = (newText) => setText(newText);

  return (
    <View>
      {showInput ? (
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChange}
          onBlur={() => setShowInput(false)}
          onLongPress={handleKeyPress} // ver como é para aprovar o texto
        />
      ) : (
        <TouchableOpacity onLongPress={() => setShowInput(true)}>
          <Text  style={styles.text} >
            {text}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LongPressText;
