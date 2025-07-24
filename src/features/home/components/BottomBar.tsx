import React, { useEffect } from "react";
import { fetchAllCars } from "@features/cars/carsSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import * as classes from "../home.module.scss";

const BottomBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cars, loading, error } = useAppSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div className={classes.carGrid}>
      {Array.isArray(cars) &&
        cars[0] &&
        Array(20)
          .fill(cars[0])
          .map((car, index) => (
            <div key={index}>
              <img src={car.picture_home} alt={car.name} />
            </div>
          ))}
    </div>
  );
};

export default BottomBar;
