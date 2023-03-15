import {atom, createStore} from 'jotai';
import {atomWithMMKV} from '../utils/AtomsMmkvUtils';
export const myStore = createStore();

export const countExampleStore = atom(0);

//save to local storage
const colorScheme = 'light';
export const colorSchemeStore = atomWithMMKV('colorScheme', colorScheme);
