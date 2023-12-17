import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from '../features/authSlice';
import { CategorySlice } from '../features/categorySlice';
// import producerReducer from '../features/producerSlice';
// import generalReducer from '../features/generalSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    category:CategorySlice.reducer
    // producer: producerReducer,
    // general: generalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch: () =>typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
