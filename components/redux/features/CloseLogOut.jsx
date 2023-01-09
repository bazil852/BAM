import { createSlice } from "@reduxjs/toolkit";
const initialValue = {
  logoutScreenStatus: false,
};

export const closeLogOutScreenSlice = createSlice({
  name: "closeLogOut",
  initialState: {
    value: initialValue,
  },
  reducers: {
    closeLogOutScreen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { closeLogOutScreen } = closeLogOutScreenSlice.actions;
export default closeLogOutScreenSlice.reducer;
