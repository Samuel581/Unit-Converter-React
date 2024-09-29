import { useState } from "react";
import {
  Box,
  Text,
  Select,
  Input,
  Button,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import temperatureConversion from "./conversions/temperatureConversion";
import lengthConversion from "./conversions/lengthConversions";
function App() {
  const units = {
    Temperature: ["celsius", "fahrenheit", "kelvin"],
    Length: ["millimeters","centimeters","meters","kilometers","inches","feet","yards","miles",],
    Weight: ["milligrams", "grams", "kilograms", "ounces", "pounds"],
  };

  type LengthUnit = typeof units["Length"][number];
  type TemperatureUnit = typeof units["Temperature"][number];
  type WeightUnit = typeof units["Weight"][number];


  type UnitType = keyof typeof units;
  //type Unit = string;
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [type, setType] = useState<UnitType | "">("");
  //const [aviableUnits, setAviableUnits] = useState<Unit[]>([]);

  const handleConvert = () => {
    const value = parseFloat(inputValue);
    if(isNaN(value)){
      alert('Provide a valid number');
      return;
    }
  };

  return (
    <Center height="100vh" backgroundColor="gray.100">
      <Box
        width="400px"
        padding="6"
        boxShadow="md"
        backgroundColor="white"
        borderRadius="lg"
      >
        <VStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Unit Converter
          </Text>
          <Select
            placeholder="Select type"
            onChange={(e) => setType(e.target.value as UnitType)}
          >
            {Object.keys(units).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>

          <HStack spacing={2} width="full">
            <Select
              placeholder="From Unit"
              onChange={(e) => setFromUnit(e.target.value)}
              isDisabled={!type}
              value={fromUnit}
            >
              {type &&
                units[type].map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
            </Select>
            <Input
              placeholder="Enter value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </HStack>

          <HStack
            spacing={2}
            maxW="full"
            width="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <Select
              placeholder="To unit"
              onChange={(e) => setToUnit(e.target.value)}
              isDisabled={!type}
              value={toUnit}
              maxW="150px"
            >
              {type &&
                units[type].map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
            </Select>
            <Text flex="1" textAlign="center" fontWeight={'bold'} textColor={'blue'}>
              {result}
            </Text>
          </HStack>

          <Button
            width="full"
            colorScheme="blackAlpha"
            onClick={handleConvert}
            isDisabled={!type || !fromUnit || !toUnit || !inputValue}
          >
            Convert
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default App;
