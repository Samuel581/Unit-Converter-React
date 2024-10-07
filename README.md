# Unit Converter React + TypeScript

A React-based web application that converts between different units of measurement, built with TypeScript.
This is a solution for [Unit Converter](https://roadmap.sh/projects/unit-converter) at [Roadmap.sh](https://roadmap.sh/backend/projects)

## Description

This Unit Converter is a web-based tool that allows users to convert values between various units of measurement. It supports conversions for length, temperature, weight, and other units in the future.

## ProjectStrcuture

conversions/
├── lengthConversions.ts
├── temperatureConversions.ts
├── unitConvert.ts
└──weightConversion.ts
App.tsx
main.tsx

- `lengthConversions.ts`: Handles conversions between length units
- `temperatureConversions.ts`: Manages temperature unit conversions
- `unitConvert.ts`: Likely contains shared conversion logic
- `weightConversion.ts`: Deals with weight unit conversions
- `App.tsx`: Main React component for the application
- `main.tsx`: Entry point of the React application

## Features

- Convert between different units of measurement:
  - Length
  - Temperature
  - Weight
  - Other units (as implemented in `unitConvert.ts`)
- Simple and intuitive user interface
- Real-time conversion as you type in the input field
- TypeScript support for type safety and improved code quality

## Technologies Used

- React
- TypeScript
- HTML
- CSS

## Installation

1. Clone this repository:
  
  ```bash
    git clone https://github.com/Samuel581/Unit-Converter-React.git
  ```

2. Navigate to the project directory:

  ```bash
  cd Unit-Converter-React
  ```

3. Install dependencies:
  
  ```bash
    npm install
  ```

4. Start the development server:
  
  ```bash
    npm start
  ```

5. Open your browser and visit `http://localhost:3000/` to view the application.

## How to Use

1. Select the type of conversion you want to perform (length, temperature, weight, etc.).
2. Choose the unit you want to convert from in the first dropdown.
3. Enter the value you want to convert in the input field.
4. Select the unit you want to convert to in the second dropdown.
5. The converted value will be displayed after you click `convert`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
