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
        background: "#f3e8d4",
        backgroundSize: "auto",
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div className={classes.wrapper}>
        <div
          // className={classes.infoBlock}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:
              selectedCar.position === "left"
                ? "flex-start"
                : selectedCar.position === "right"
                ? "flex-end"
                : "center",
            textAlign:
              selectedCar.position === "left"
                ? "left"
                : selectedCar.position === "right"
                ? "right"
                : "center",
          }}
        >
          <h1>{selectedCar.name}</h1>
          <h2>{selectedCar.year}</h2>
          <h2>{selectedCar.team}</h2>
          <h2 style={{ color: "#dd3940" }}>Winner Le-Mans 24H</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems:
              selectedCar.position_picture === "left"
                ? "flex-start"
                : selectedCar.position_picture === "right"
                ? "flex-end"
                : "center",
          }}
        >
          <img src={selectedCar.picture} alt="" />
        </div>
        <hr />
        <div className={classes.infoCar}>
          <div>
            {Object.entries(selectedCar.specs).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
          <div>
            {!selectedCar.visual ? (
              <>
                <div>
                  <img src={selectedCar.no_visual} alt="" />
                </div>
              </>
            ) : (
              <>
                {" "}
                <div>
                  <iframe
                    height="0"
                    width="0"
                    src="https://www.googletagmanager.com/static/service_worker/5840/sw_iframe.html?origin=https%3A%2F%2F3dmodels.org"
                    cla="display: none; visibility: hidden;"
                  ></iframe>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnceCars;
