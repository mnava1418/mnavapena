import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/rootReducer';

export default configureStore({
  reducer: {
    root: rootReducer
  },
});
