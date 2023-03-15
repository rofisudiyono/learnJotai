import {View, Text} from 'react-native';
import React, {Suspense} from 'react';
import {atom, useAtom} from 'jotai';
import {atomWithCache} from 'jotai-cache';
import {Button} from '../../components';

const idAtom = atom(1);
const normalAtom = atom(async get => {
  const id = get(idAtom);
  const response = await fetch(`https://reqres.in/api/users/${id}?delay=1`);
  return response.json();
});
const cachedAtom = atomWithCache(async get => {
  const id = get(idAtom);
  const response = await fetch(`https://reqres.in/api/users/${id}?delay=1`);
  return response.json();
});
const FetchWithCache = () => {
  const [id, setId] = useAtom(idAtom);
  const handlePrev = () => {
    if (id !== 1) {
      setId(id - 1);
    }
  };
  const handleNext = () => {
    setId(id + 1);
  };
  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row p-4">
        <View className="flex-1">
          <Button label="Prev" onPress={handlePrev} />
        </View>
        <View className="flex-1">
          <Button label="Next" onPress={handleNext} />
        </View>
      </View>
      <Text className="px-4 font-semibold text-xl">page : {id}</Text>
      <Suspense
        fallback={
          <Text className="text-blue-500 text-xl font-bold p-4">
            Loading...
          </Text>
        }>
        <CachedUser />
      </Suspense>
      <Suspense
        fallback={
          <Text className="text-blue-500 text-xl font-bold p-4">
            Loading...
          </Text>
        }>
        <NormalUser />
      </Suspense>
    </View>
  );
};

export default FetchWithCache;

const NormalUser = () => {
  const [{data}] = useAtom(normalAtom);
  return (
    <View className="p-4">
      <Text>User (normal atom)</Text>

      <Text>ID: {data.id}</Text>
      <Text>First name: {data.first_name}</Text>
      <Text>Last name: {data.last_name}</Text>
    </View>
  );
};

const CachedUser = () => {
  const [{data}] = useAtom(cachedAtom);
  return (
    <View className="p-4">
      <Text>User (cached atom)</Text>
      <Text>ID: {data.id}</Text>
      <Text>First name: {data.first_name}</Text>
      <Text>Last name: {data.last_name}</Text>
    </View>
  );
};
