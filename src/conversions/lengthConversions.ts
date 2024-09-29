export type LengthUnit = "millimeter" | "centimeter" | "meter" | "kilometer" | "inch" | "foot" | "yard" | "mile";

const lengthConversion = (value: number, from: LengthUnit, to: LengthUnit): number => {
  const lengthConversions: Record<LengthUnit, number> = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };

  return (value * lengthConversions[from]) / lengthConversions[to];
};

export default lengthConversion;
