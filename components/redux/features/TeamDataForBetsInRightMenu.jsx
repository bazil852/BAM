import { createSlice } from "@reduxjs/toolkit";

const initialRightPanelData = {
  team1: "",
  team1Score: "",
  team2: "",
  team2Score: "",
  betOnTeam: "",
  betOdds: "",
  stake: 0,
};
export const rightPanelDataSlice = createSlice({
  name: "rightPanelData",
  initialState: {
    value: initialRightPanelData,
  },
  reducers: {
    rightPanelDataReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { rightPanelDataReducer } = rightPanelDataSlice.actions;

export default rightPanelDataSlice.reducer;
