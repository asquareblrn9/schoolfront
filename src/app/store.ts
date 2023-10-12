import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import producerReducer from '../features/producerSlice';
// import generalReducer from '../features/generalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
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
