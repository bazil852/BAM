import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  language: "",
};

export const LanguageSelectorSlice = createSlice({
  name: "languageSelector",
  initialState: {
    value: initialState,
  },
  reducers: {
    languageSelectorReducerFunction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { languageSelectorReducerFunction } =
  LanguageSelectorSlice.actions;
export default LanguageSelectorSlice.reducer;
