import React, { useEffect, useState } from "react";
import * as classes from "@features/cars/cars.module.scss";
import { Car } from "../types";

type OnceCarsProps = {
  car: Car[];
  id: string | undefined;
};

const OnceCars: React.FC<OnceCarsProps> = ({ car, id }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  const selectedCar = car.find((item) => item.id === id);

  if (!selectedCar) return <p>Машина с ID {id} не найдена</p>;

  const historyImages = selectedCar.history.map((h) => h.imageHistory);

  const closeLightbox = () => {
    setClosing(true);
    setTimeout(() => {
      setLightboxIndex(null);
      setClosing(false);
    }, 400);
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + historyImages.length) % historyImages.length
      );
    }
  };

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % historyImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div
      className={classes.fullscreenBackground}
      style={{
        background: selectedCar.bg,
        backgroundSize: "auto",
        backgroundPosition: "top left",
        backgroundRepeat: "repeat",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div className={classes.wrapper}>
        <div
          className={`${classes.infoBlock} ${
            selectedCar.position === "left"
              ? classes.left
              : selectedCar.position === "right"
              ? classes.right
              : classes.center
          }`}
        >
          <h1 style={{ color: selectedCar.paragraphColor }}>
            {selectedCar.name}
          </h1>
          <h2 style={{ color: selectedCar.paragraphColor }}>
            {selectedCar.year}
          </h2>
          <h2 style={{ color: selectedCar.paragraphColor }}>
            {selectedCar.team}
          </h2>
          <h2 style={{ color: "#dd3940" }}>Winner Le-Mans 24H</h2>
        </div>
        <div
          className={`${classes.pictureBlock} ${
            selectedCar.position_picture === "left"
              ? classes.left
              : selectedCar.position_picture === "right"
              ? classes.right
              : classes.center
          }`}
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
              <p key={key} style={{ color: selectedCar.textColor }}>
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
                <div>haya</div>
              </>
            )}
          </div>
        </div>
        <div className={classes.infoHistory}>
          <h1 style={{ color: selectedCar.paragraphColor }}>History</h1>
          <div>
            {selectedCar.history.map((elem, index) => (
              <div key={elem.id}>
                <img
                  src={elem.imageHistory}
                  alt=""
                  onClick={() => setLightboxIndex(index)}
                />
                <p>{elem.textHistory}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.infoParticipants}>
          <h1 style={{ color: selectedCar.paragraphColor }}>Participants</h1>
          <div>
            {selectedCar.history.map((elem, index) => (
              <div key={elem.id}>
                <img
                  src={elem.imageHistory}
                  alt=""
                  onClick={() => setLightboxIndex(index)}
                />
                <p>{elem.textHistory}</p>
              </div>
            ))}
          </div>
        </div>
        {selectedCar.picture_footer && (
          <div className={classes.bottomPicture}>
            <img src={selectedCar.picture_footer} alt="" />
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className={`${classes.lightbox}  ${
            closing ? classes.fadeOut : classes.fadeIn
          }`}
          onClick={closeLightbox}
        >
          <button
            className={`${classes.navButton} ${classes.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ←
          </button>
          <img
            src={historyImages[lightboxIndex]}
            alt="History enlarged"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={`${classes.navButton} ${classes.next}`}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default OnceCars;
