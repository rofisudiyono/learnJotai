import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'jotai';
import React from 'react';
import {RootStackParamList} from './interfaces/NavigationsInterfaces';
import ExampleAtoms from './screens/ExampleAtom';
import ExampleLocalStorage from './screens/ExampleLocalStorage';
import Home from './screens/Home';
import Splash from './screens/Splash';
import {myStore} from './store';

import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {MMKV} from 'react-native-mmkv';
const Stack = createNativeStackNavigator<RootStackParamList>();
const storage = new MMKV();
if (__DEV__) {
  initializeMMKVFlipper({default: storage});
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ExampleAtoms" component={ExampleAtoms} />
      <Stack.Screen
        name="ExampleLocalStorage"
        component={ExampleLocalStorage}
      />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
