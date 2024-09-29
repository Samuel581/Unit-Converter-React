const temperatureConversion = (value: number, from: string, to: string): number => {
    switch (from) {
        case 'Celsius':
            if(to === 'Fahrenheit') return value * 9/5 + 32;
            if(to === 'Kelvin') return value + 273.15;
            break;
        case 'Fahrenheit':
            if(to==='Celsius') return (value - 32) * 5/9;
            if(to === 'Kelvin') return (value - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            if(to==='Celsius') return value - 273.15;
            if(to==='Fahrenheit') return (value - 273.15) * 9/5 + 32;
            break;
        default:
            break;
    }
    return value;
}

export default temperatureConversion