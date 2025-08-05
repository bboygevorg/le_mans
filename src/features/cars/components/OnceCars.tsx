import React from "react";
import * as classes from "@features/cars/cars.module.scss";
import { Car } from "../types";

type OnceCarsProps = {
  car: Car[];
  id: string | undefined;
};

const OnceCars: React.FC<OnceCarsProps> = ({ car, id }) => {
  const selectedCar = car.find((item) => item.id === id);
  if (!selectedCar) return <p>Машина с ID {id} не найдена</p>;

  return (
    <div
      className={classes.fullscreenBackground}
      style={{
        // backgroundImage: `url(${selectedCar.backgroundImage})`,
        background: "#f3e8d4",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className={classes.wrapper}>
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
      </div>
    </div>
  );
};

export default OnceCars;
