import lengthConversion, {LengthUnit} from "./lengthConversions";
import temperatureConversion, {TemperatureUnit} from "./temperatureConversion";

export const units = {
    Temperature: ["celsius", "fahrenheit", "kelvin"] as const,
    Length: ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot", "yard", "mile",] as const,
    Weight: ["milligram", "gram", "kilogram", "ounce", "pound"] as const,
};

export type UnitType = keyof typeof units;
// Imma breakdown this later, this was made by the influence of some kind or rock or something
type Unit = typeof units[UnitType][number];

const unitConverter = (value: number, type: UnitType, fromUnit: string, toUnit: string): number => {
    const validUnits: readonly string[] = units[type];
    // Ensuring fromUnit and toUnit are valid elements of validUnits
    if (
      validUnits.includes(fromUnit as Unit) &&
      validUnits.includes(toUnit as Unit)
    ) {
        switch (type) {
          case "Length":
            return lengthConversion(
              value,
              fromUnit as LengthUnit,
              toUnit as LengthUnit
            );
          case "Temperature":
            return temperatureConversion(
              value,
              fromUnit as TemperatureUnit,
              toUnit as TemperatureUnit
            );
          // TODO: Add Weight
          default:
            throw new Error("Invalid conversion type provided.");
        }
      } else {
        throw new Error("Invalid conversion units.");
      }
}

export default unitConverter;