import { combineReducers } from "@reduxjs/toolkit";
import CareersReducer from "./slices/Careers";

export const rootReducers = combineReducers({
  careers: CareersReducer,
  login: "",
});
