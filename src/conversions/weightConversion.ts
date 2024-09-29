export type WeightUnit = "milligram" | "gram" | "kilogram" | "ton" | "ounce" | "pound";
const weightConversion = (value: number, from: WeightUnit, to: WeightUnit): number => {
  const weightConversions: Record<WeightUnit, number> = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ton: 1000000,
    ounce: 28.3495,
    pound: 453.592,
  };

  return (value * weightConversions[from]) / weightConversions[to];
};

export default weightConversion;