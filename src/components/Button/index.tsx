import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, label}: {onPress: () => void; label: string}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-blue-500 w-full items-center justify-center h-11 rounded-lg">
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
