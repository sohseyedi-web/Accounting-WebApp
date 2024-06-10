import { configureStore } from "@reduxjs/toolkit";
import accountingReducer from "./reducer/accountingReducer";

const store = configureStore({
  reducer: {
    accounting: accountingReducer,
  },
});

export default store;