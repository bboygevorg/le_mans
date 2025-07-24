import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCars } from "@features/cars/carsSlice";
import { RootState, AppDispatch } from "@app/store";

const BottomBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cars, loading, error } = useSelector(
    (state: RootState) => state.cars
  );

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div>
      <h2>Победители Le Mans</h2>
      <ul>
        {cars.map((car) => (
          <>
            <img src={car.picture_home} alt="" />
            <li key={car.id}>
              <strong>{car.name}</strong> ({car.year}) — {car.team}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default BottomBar;
