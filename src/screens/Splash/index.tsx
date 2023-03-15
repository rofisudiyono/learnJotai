import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {RootStackScreenProps} from '../../interfaces/NavigationsInterfaces';
import {useColorScheme} from 'nativewind';
import {colorSchemeStore} from '../../store';
import {ColorSchemeSystem} from 'nativewind/dist/style-sheet/color-scheme';
import {useAtom} from 'jotai';

const Splash = ({
  navigation,
}: {
  navigation: RootStackScreenProps<'Splash'>['navigation'];
}) => {
  const {setColorScheme} = useColorScheme();
  const [localColorScheme] = useAtom(colorSchemeStore);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, [navigation]);

  useEffect(() => {
    setColorScheme(localColorScheme as ColorSchemeSystem);
  }, [localColorScheme, setColorScheme]);

  return (
    <View className="items-center justify-center flex-1 bg-white dark:bg-slate-800">
      <Text className="text-2xl font-bold text-blue-500 dark:text-blue-300">
        Jotai State Management
      </Text>
    </View>
  );
};

export default Splash;
