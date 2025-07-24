export interface CarSpecs {
  Engine: string;
  Displacement: string;
  PowerOutput: string;
  TopSpeed: string;
  Drivetrain: string;
  Transmission: string;
  Brakes: string;
  Weight: string;
}

export interface CarHistory {
  id: number;
  imageHistory: string;
  textHistory: string;
}

export interface Car {
  id: string;
  name: string;
  year: number;
  team: string;
  picture_home: string;
  picture: string;
  "3d": string | null;
  specs: CarSpecs[];
  fontFamily: string;
  backgroundImage: string;
  textColor: string;
  position: "left" | "right" | "center";
  history: CarHistory[];
}
