import React from "react";
import { Car } from "../../cars/types";
import { useHoverSound } from "@shared/hooks/useHoverSound";
import { Link } from "react-router-dom";

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
      <Link to={`car/${car.id}`}>
        <img src={car.picture_home} alt={car.name} />
      </Link>
      <audio ref={audioRef} src={car.sound} preload="auto" />
    </div>
  );
};

const CarsBlock: React.FC<CarsBlockProps> = ({ cars }) => {
  return (
    <>
      {cars.map((car, index) => (
        <HoverSoundImage key={car.id || index} car={car} />
      ))}
    </>
  );
};

export default CarsBlock;
