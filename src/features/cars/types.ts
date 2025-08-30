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

export interface RacersInfo {
  id: number;
  image: string;
  name: string;
  position: string;
}

export interface Car {
  id: string;
  name: string;
  year: number;
  team: string;
  picture_home: string;
  picture: string;
  sound: string;
  visual: string | null;
  no_visual: "string";
  specs: CarSpecs;
  fontFamily: string;
  bg: string;
  textColor: string;
  paragraphColor: string;
  position: "left" | "right" | "center";
  position_picture: "left" | "right" | "center";
  history: CarHistory[];
  racers: RacersInfo[];

  picture_footer: string;
}
