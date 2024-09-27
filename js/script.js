

function convertidor() {
    const input = document.querySelector("input");
    const celsius = Number(input.value);
    let resultF = document.getElementById("resultadoF");
    let resultK = document.getElementById("resultadoK");
    
    const fahrenheit = celsiusAFahrenheit(celsius);
    const kelvin = celsiusAKelvin(celsius);
    
    resultF.innerText = fahrenheit;
    resultK.innerText = kelvin; 
}

function celsiusAFahrenheit(temperatura) {
    return (temperatura * (9/5) + 32);
}

function celsiusAKelvin(temperatura) {
    return (temperatura + 273.15);
}