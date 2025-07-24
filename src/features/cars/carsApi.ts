import axios from "axios";
import { Car } from "../cars/types";

const BASE_URL = "http://localhost:5000/carsData";

export const productsAPI = {
  getAllCars: async (): Promise<Car[]> => {
    const response = await axios.get<Car[]>(BASE_URL);
    return response.data;
  },

  getCarById: async (id: string): Promise<Car | undefined> => {
    const response = await axios.get<Car>(`${BASE_URL}/${id}`);
    return response.data;
  },
};
