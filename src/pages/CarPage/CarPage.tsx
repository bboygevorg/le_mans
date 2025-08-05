import React, { useEffect } from "react";
import OnceCars from "@features/cars/components/OnceCars";
import { useParams } from "react-router-dom";
import { fetchAllCars } from "@features/cars/carsSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";

const CarPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { cars, loading, error } = useAppSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  if (loading || cars.length === 0) return <p>Загрузка данных...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return <OnceCars car={cars} id={id} />;
};

export default CarPage;
