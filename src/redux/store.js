import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducer";
import thunk from "redux-thunk";
import { APIURL } from "../config";
import { CareersReducer } from "./slices/Careers";

const store = configureStore({
  reducer: rootReducers,
  // Add middleware or other configurations as needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: APIURL,
        // extraArgument: APIURL2,
      },
    }),
});

const { dispatch } = store;

export { store, dispatch };
