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

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    // Conversion logic goes here
    //setResult(); // Example conversion (millimeters to centimeters)
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

          <Select placeholder="Length">
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Volume</option>
          </Select>

          <HStack spacing={2} width="full">
            <Select placeholder="Millimeters">
              <option value="millimeters">Millimeters</option>
              <option value="centimeters">Centimeters</option>
              <option value="meters">Meters</option>
            </Select>
            <Input
              placeholder="Enter value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </HStack>

          <HStack spacing={2} width="full">
            <Select placeholder="Centimeters">
              <option value="millimeters">Millimeters</option>
              <option value="centimeters">Centimeters</option>
              <option value="meters">Meters</option>
            </Select>
            <Input placeholder="Result" value={result} isReadOnly />
          </HStack>

          <Button
            width="full"
            colorScheme="blackAlpha"
            onClick={handleConvert}
          >
            Convert
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default App;
