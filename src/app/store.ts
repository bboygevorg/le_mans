import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/cars/carsSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
  devTools: {
    name: "LeMansStore",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
