import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ButtonComp = props => (
  <TouchableOpacity
    onPress={props.OnPress}
    style={[
      {backgroundColor: 'pink', height: 100, width: 60},
      props.buttonStyle,
    ]}>
    <Text>{props.buttonName}</Text>
  </TouchableOpacity>
);

export default ButtonComp;
