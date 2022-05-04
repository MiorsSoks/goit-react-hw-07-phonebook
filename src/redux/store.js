import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from '../services/contacts'

export const store = configureStore({
  reducer: {

    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
})

setupListeners(store.dispatch)





















// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER, } from 'redux-persist';
// import { contactsReduser } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//   },
//       middleware(getDefaultMiddleware) {
//       return getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       });
//   },
// });

// export const persistor = persistStore(store);
