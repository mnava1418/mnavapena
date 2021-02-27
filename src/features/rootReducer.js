import { createSlice } from '@reduxjs/toolkit';

export const rootSlice = createSlice({
  name: 'main',
  initialState: {
    name: ''
  },
  reducers: {
    main: state => {
      state.name = 'mnavapena'
    }
  }
})

export const { main } = rootSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectName = state => state.root.name

export default rootSlice.reducer;
