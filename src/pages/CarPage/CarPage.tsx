import React, { useEffect } from "react";
import OnceCars from "@features/cars/components/OnceCars";
import * as classes from "@features/cars/cars.module.scss";
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

  const selectedCar = cars.find((car) => car.id === id);
  if (!selectedCar) return <p>Машина с ID {id} не найдена</p>;

  return (
    <div
      className={classes.fullscreenBackground}
      style={{
        backgroundImage: `url(${selectedCar.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <h1>{selectedCar.name}</h1>
        <h2>{selectedCar.year}</h2>
        <h2>{selectedCar.team}</h2>
        <h2>Winner Le-Mans 24H</h2>
        <div>
          <img src={selectedCar.picture} alt="" />
        </div>
        <hr />
        <div>
          {Object.entries(selectedCar.specs).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
        <OnceCars />
      </div>
    </div>
  );
};

export default CarPage;
