import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
export const countAtom = atom(0);
export const countFromNested = atom(0);
export const nestedAtomsReadOnly = atom(get => get(countAtom) * 2);
export const nestedAtomsReadAndWrite = atom(
  get => get(nestedAtomsReadOnly) * 10,
  (get, set, newPrice: number) => {
    set(countFromNested, get(countAtom) + newPrice);
  },
);

const ExampleAtoms = () => {
  return (
    <View className="flex-1 bg-white p-6">
      <Counter1 />
      <Counter2 />
      <NestedComponent />
    </View>
  );
};

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <View>
      <Text className="text-base font-semibold mb-1">
        count 1 component (atom) : {count}
      </Text>
      <Button label="+1" onPress={() => setCount(c => c + 1)} />
    </View>
  );
};
const Counter2 = () => {
  const setCount = useSetAtom(countAtom);
  const count = useAtomValue(countAtom);
  return (
    <View>
      <Text className="text-base font-semibold mb-1">
        count 2 component (useAtom):{count}
      </Text>
      <Button label="+1" onPress={() => setCount(c => c + 1)} />
    </View>
  );
};

const NestedComponent = () => {
  const count = useAtomValue(nestedAtomsReadOnly);
  const count2 = useAtomValue(countFromNested);
  const setCount2 = useSetAtom(nestedAtomsReadAndWrite);
  return (
    <View>
      <Text className="text-base font-semibold mb-1">
        count nested ready only * 2 :{count}
      </Text>
      <Text className="text-base font-semibold mb-1">
        count nested read and write set 100 :{count2}
      </Text>
      <Button label="set(100)" onPress={() => setCount2(100)} />
    </View>
  );
};

export default ExampleAtoms;
