import {configureStore} from '@reduxjs/toolkit';
import {filtersReducer} from './filterSlice';
import {contactsReducer} from './contactsSlice';
import {
	persistReducer,
	persistStore,
	FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST, 
  PURGE,
  REGISTER, } from 'redux-persist' ;
import storage from 'redux-persist/lib/storage';

import {authReducer} from './auth';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['user','token'],
}

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		contacts: contactsReducer,
		filter: filtersReducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
console.log(store)