import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "../cars/types";
import { productsAPI } from "../cars/carsApi";

interface CarState {
  cars: Car[];
  selectedCar: Car | null;
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  selectedCar: null,
  loading: false,
  error: null,
};

export const fetchAllCars = createAsyncThunk<Car[]>(
  "cars/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await productsAPI.getAllCars();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCarById = createAsyncThunk<Car, string>(
  "cars/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await productsAPI.getCarById(id);
      if (!data) throw new Error("Car not found");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearSelectedCar(state) {
      state.selectedCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllCars.fulfilled,
        (state, action: PayloadAction<Car[]>) => {
          state.cars = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchAllCars.rejected, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action: PayloadAction<Car>) => {
        state.selectedCar = action.payload;
        state.loading = false;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedCar } = carSlice.actions;
export default carSlice.reducer;
