import {useAtom} from 'jotai';
import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {colorSchemeStore} from '../../store';
const ExampleLocalStorage = () => {
  const {colorScheme, setColorScheme} = useColorScheme();
  const [, setLocalColorScheme] = useAtom(colorSchemeStore);
  const handleChangeColorScheme = () => {
    setLocalColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <View className="flex-1 bg-white dark:bg-slate-800 justify-center items-center px-4">
      <Text className="mb-4 text-2xl text-black dark:text-white">
        using theme <Text className="font-bold uppercase">{colorScheme}</Text>
      </Text>
      <Button onPress={handleChangeColorScheme} label={'Change Theme'} />
    </View>
  );
};

export default ExampleLocalStorage;
