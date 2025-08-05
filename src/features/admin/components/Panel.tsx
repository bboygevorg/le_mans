import React, { useState } from "react";
import * as classes from "../admin.module.scss";

const Panel: React.FC = () => {
  const [car, setCar] = useState({
    id: "",
    name: "",
    year: "",
    team: "",
    picture_home: "",
    picture: "",
    visual: "",
    sound: "",
    backgroundImage: "",
    fontFamily: "",
    textColor: "",
    position: "left",
    specs: {
      Engine: "",
      Displacement: "",
      PowerOutput: "",
      TopSpeed: "",
      Drivetrain: "",
      Transmission: "",
      Brakes: "",
      Weight: "",
    },
    history: [{ id: 1, imageHistory: "", textHistory: "" }],
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    if (name.startsWith("specs.")) {
      const specKey = name.split(".")[1];
      setCar((prev) => ({
        ...prev,
        specs: { ...prev.specs, [specKey]: value },
      }));
    } else {
      setCar((prev) => ({ ...prev, [name]: value }));
    }
  };
  ("");
  const handleHistoryChange = (
    index: number,
    field: "imageHistory" | "textHistory",
    value: string
  ) => {
    const updated = [...car.history];
    updated[index][field] = value;
    setCar((prev) => ({ ...prev, history: updated }));
  };

  const addHistoryItem = () => {
    setCar((prev) => ({
      ...prev,
      history: [
        ...prev.history,
        { id: prev.history.length + 1, imageHistory: "", textHistory: "" },
      ],
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/carsData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });

    if (response.ok) {
      alert("Данные отправлены успешно!");
      setCar({ ...car, id: "", name: "", year: "", team: "" });
    } else {
      alert("Ошибка при отправке данных");
    }
  };

  return (
    <form className={classes.carFormWrapper} onSubmit={handleSubmit}>
      <h2>Add a car</h2>

      <input
        name="id"
        placeholder="id"
        value={car.id}
        onChange={handleChange}
      />
      <input
        name="name"
        placeholder="name"
        value={car.name}
        onChange={handleChange}
      />
      <input
        name="year"
        placeholder="year"
        value={car.year}
        onChange={handleChange}
      />
      <input
        name="team"
        placeholder="team"
        value={car.team}
        onChange={handleChange}
      />
      <input
        name="picture_home"
        placeholder="picture_home"
        value={car.picture_home}
        onChange={handleChange}
      />
      <input
        name="picture"
        placeholder="picture"
        value={car.picture}
        onChange={handleChange}
      />

      <input
        name="visual"
        placeholder="visual"
        value={car.visual}
        onChange={handleChange}
      />
      <input
        name="sound"
        placeholder="sound"
        value={car.sound}
        onChange={handleChange}
      />
      <input
        name="backgroundImage"
        placeholder="backgroundImage"
        value={car.backgroundImage}
        onChange={handleChange}
      />
      <input
        name="fontFamily"
        placeholder="fontFamily"
        value={car.fontFamily}
        onChange={handleChange}
      />
      <input
        name="textColor"
        placeholder="textColor"
        value={car.textColor}
        onChange={handleChange}
      />
      <input
        name="position"
        placeholder="position"
        value={car.position}
        onChange={handleChange}
      />

      <h3>Characteristics</h3>
      {Object.entries(car.specs).map(([key, value]) => (
        <input
          key={key}
          name={`specs.${key}`}
          placeholder={key}
          value={value}
          onChange={handleChange}
        />
      ))}
      <div className={classes.section}>
        <h3>History</h3>
        {car.history.map((item, index) => (
          <div key={item.id} className={classes.historyBlock}>
            <input
              placeholder="imageHistory"
              value={item.imageHistory}
              onChange={(e) =>
                handleHistoryChange(index, "imageHistory", e.target.value)
              }
            />
            <textarea
              placeholder="textHistory"
              value={item.textHistory}
              onChange={(e) =>
                handleHistoryChange(index, "textHistory", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addHistoryItem} className={classes.add}>
          add new block
        </button>
      </div>

      <button type="submit" className={classes.submit}>
        Send
      </button>
    </form>
  );
};

export default Panel;
