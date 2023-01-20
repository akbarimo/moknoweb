import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { botReducer, pageReducer, discordReducer } from '../reducers';

const persistDiscordConfig = {
  key: 'discord',
  storage,
};

const persistedDiscordReducer = persistReducer(
  persistDiscordConfig,
  discordReducer,
);

const store = configureStore({
  reducer: {
    page: pageReducer,
    bot: botReducer,
    user: persistedDiscordReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER, PURGE],
      },
    });
  },
});

const persistor = persistStore(store);

export { persistor, store };
