import { createSlice } from "@reduxjs/toolkit";
import btc from "./assets/btc1.png";
// THERE WILL BE TWO SLICES, ONE FOR THE WITHDRAW
// SCREEN CURRENCY SELECTOR AND
//  ONE FOR THE DEPOSIT SCREEN CURRENCY SELECTOR
const initialStateValue = {
  currency: "ETH",
  minimumAmount: "0.00000",
  subtractedAmount: "0.0000",
  coinValue: (
    <p
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.1rem",
      }}
    >
      {" "}
      0.00000000
      <img src={btc} style={{ width: "1.5rem", height: "1.5rem" }} />
    </p>
  ),
  coinImage: " ",
};

export const WithdrawCurrencySelectorSlice = createSlice({
  name: "withdrawCurrency",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    currencyValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { currencyValue } = WithdrawCurrencySelectorSlice.actions;

export default WithdrawCurrencySelectorSlice.reducer;
