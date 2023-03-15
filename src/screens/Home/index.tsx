import {useAtomValue} from 'jotai';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
import {RootStackScreenProps} from '../../interfaces/NavigationsInterfaces';
import {colorSchemeStore} from '../../store';
import {countAtom, nestedAtomsReadOnly} from '../ExampleAtom';

const Home = ({
  navigation,
}: {
  navigation: RootStackScreenProps<'Home'>['navigation'];
}) => {
  const count = useAtomValue(countAtom);
  const countNested = useAtomValue(nestedAtomsReadOnly);
  const colorScheme = useAtomValue(colorSchemeStore);
  return (
    <View className="flex-1 bg-white dark:bg-slate-800">
      <View className="w-full p-7" style={styles.gap}>
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Jōtai
        </Text>
        <Text className="text-lg font-bold text-black dark:text-white">
          count 1 component (atom) : {count}
        </Text>
        <Text className="text-lg font-bold text-black dark:text-white">
          count nested ready only * 2 :{countNested}
        </Text>
        <Text className="text-lg font-bold text-black dark:text-white">
          using colorScheme : {colorScheme}
        </Text>
        <Button
          onPress={() => navigation.navigate('ExampleAtoms')}
          label={'Example Count Atom'}
        />
        <Button
          onPress={() => navigation.navigate('ExampleLocalStorage')}
          label={'Example Local Storage'}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  gap: {
    gap: 16,
  },
});
