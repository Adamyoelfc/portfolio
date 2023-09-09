import { createSlice } from '@reduxjs/toolkit';
export const aboutSlice = createSlice({
  name: 'aboutInside',
  initialState: {
    isInside: false,
  },
  reducers: {
    setTrue: (state) => {
      state.isInside = true;
    },
    setFalse: (state) => {
      state.isInside = false;
    },
  },
});
export const { setTrue, setFalse } = aboutSlice.actions;
export default aboutSlice.reducer;
