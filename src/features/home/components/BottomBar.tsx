import React, { useEffect } from "react";
import { fetchAllCars } from "@features/cars/carsSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import * as classes from "../home.module.scss";
import CarsBlock from "@features/cars/components/Cars";

const BottomBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cars, loading, error } = useAppSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <div className={classes.carGrid}>
      <CarsBlock cars={cars} alt={"sound"} />
    </div>
  );
};

export default BottomBar;
