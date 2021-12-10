import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';


const PetShopButton = props => (
  <TouchableOpacity
    onPress={props.Onpress}
    style={[
      {backgroundColor: '#f58742', height: 40, width: 200},
      props.container,
    ]}>
    <Text style={props.textStyle}>{props.buttonName}</Text>
  </TouchableOpacity>
);

export default PetShopButton;
