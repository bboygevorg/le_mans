import React from "react";

interface PaintingProps {
  imageUrl: string;
}

const Painting: React.FC<PaintingProps> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Painting;
