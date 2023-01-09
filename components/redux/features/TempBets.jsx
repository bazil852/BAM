import { createSlice } from "@reduxjs/toolkit";
const TempBets = {
  Team: "None",
  odds: "0.0",
};

export const TempBetsValuesSelectorSlice = createSlice({
  name: "TempBets",
  initialState: {
    value: TempBets,
  },
  reducers: {
    TempBetsValues: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { TempBetsValues } = TempBetsValuesSelectorSlice.actions;
export default TempBetsValuesSelectorSlice.reducer;
