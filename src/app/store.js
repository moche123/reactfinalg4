import { configureStore } from '@reduxjs/toolkit';
import { votationReduce } from '../features/portfolio/votationSlice';
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    votation: votationReduce
  },
});
