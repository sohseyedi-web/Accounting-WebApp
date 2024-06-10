import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const accountingReducer = createSlice({
  name: "accounting",
  initialState,
  reducers: {},
});

export const { examFunc } = accountingReducer.actions;

export default accountingReducer.reducer;
