import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from '../features/authSlice';
import { CategorySlice } from '../features/categorySlice';
import { ClassSlice } from '../features/classSlice';
import { SubjectSlice } from '../features/subjectSlice';
// import producerReducer from '../features/producerSlice';
// import generalReducer from '../features/generalSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    category:CategorySlice.reducer,
    classes:ClassSlice.reducer,
    subject:SubjectSlice.reducer
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
