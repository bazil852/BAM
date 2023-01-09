import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  rightMenuState: false,
};

export const ToggleRightMenuSlice = createSlice({
  name: "toggleRightMenu",
  initialState: {
    value: initialState,
  },
  reducers: {
    toggleRightMenuReducerFunction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleRightMenuReducerFunction } = ToggleRightMenuSlice.actions;
export default ToggleRightMenuSlice.reducer;
