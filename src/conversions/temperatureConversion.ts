export type TemperatureUnit = "celsius" | "fahrenheit" | "kelvin";

const temperatureConversion = (value: number, from: string, to: string): number => {
  switch (from.toLowerCase()) {
    case "celsius":
      if (to.toLowerCase() === "fahrenheit") return value * 9/5 + 32;
      if (to.toLowerCase() === "kelvin") return value + 273.15;
      break;
    case "fahrenheit":
      if (to.toLowerCase() === "celsius") return (value - 32) * 5/9;
      if (to.toLowerCase() === "kelvin") return (value - 32) * 5/9 + 273.15;
      break;
    case "kelvin":
      if (to.toLowerCase() === "celsius") return value - 273.15;
      if (to.toLowerCase() === "fahrenheit") return (value - 273.15) * 9/5 + 32;
      break;
    default:
      throw new Error("Invalid temperature units.");
  }
  return value;
};

export default temperatureConversion;
