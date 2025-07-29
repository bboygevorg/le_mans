import React from "react";
import { Car } from "../../cars/types";
import { useHoverSound } from "@shared/hooks/useHoverSound";

type CarsBlockProps = {
  cars: Car[];
  alt: string;
};

type HoverSoundImageProps = {
  car: Car;
};

const HoverSoundImage: React.FC<HoverSoundImageProps> = ({ car }) => {
  const { audioRef, handleMouseEnter, handleMouseLeave } = useHoverSound(
    car.sound
  );
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={car.picture_home} alt={car.name} />
      <audio ref={audioRef} src={car.sound} preload="auto" />
    </div>
  );
};

const CarsBlock: React.FC<CarsBlockProps> = ({ cars }) => {
  return (
    <>
      {Array.isArray(cars) &&
        cars[0] &&
        Array(20)
          .fill(cars[0])
          .map((car, index) => (
            <HoverSoundImage key={car.id || index} car={car} />
          ))}
      ;
    </>
  );
};

export default CarsBlock;
