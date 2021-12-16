import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import globalStyles from '../styles/global';

const login = () => {
 

  const InputContainer = ({placeholder, onChangeText}) => {
    const [hasFocus, setHasFocus] = useState('default')
    const [val ,setVal] = useState('')
    function handleFocus(){
      setHasFocus(!hasFocus)
    }
    const myTextInput = {
      onFocus: () => setHasFocus('active'),
      onBlur: () => setHasFocus('default'),
      style: globalStyles.input_box,
      value: val,
    }

    const myTextInputPlaceholder = {
      style: [globalStyles.input_placeholder.common, globalStyles.input_placeholder[hasFocus]],
    }
    
    return (
      <View style={globalStyles.input_box_container}>
        <Text
          {...myTextInputPlaceholder}
          >
          {placeholder}
        </Text>
        <TextInput
          {...myTextInput}
          
          onChangeText={(e) => {
            setVal(e); 
            onChangeText && onChangeText(e);
          }}
        />
      
      </View>
    );
  };

  const test = { 
    item1: 'abcd'
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.typography.title}>Get on the wave</Text>

      <InputContainer placeholder="EMAIL/PHONE" onChangeText={(e) => console.log(e)}/>
      <InputContainer placeholder="PASSWORD"/>
      
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.button_text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {}
})