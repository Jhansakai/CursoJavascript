

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  function convertTemperature(scale) {
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const resultMessage = document.getElementById("resultMessage");
  
    if (isNaN(tempInput)) {
      resultMessage.textContent = "Por favor ingresa un valor numérico válido.";
      resultMessage.style.color = "red";
      return;
    }
  
    let result = '';
    let unit = '';
  
    if (scale === 'celsius') {
      result = `En Kelvin: ${celsiusToKelvin(tempInput).toFixed(2)} °K, En Fahrenheit: ${celsiusToFahrenheit(tempInput).toFixed(2)} °F`;
    } else if (scale === 'kelvin') {
      result = `En Celsius: ${kelvinToCelsius(tempInput).toFixed(2)} °C, En Fahrenheit: ${kelvinToFahrenheit(tempInput).toFixed(2)} °F`;
    } else if (scale === 'fahrenheit') {
      result = `En Celsius: ${fahrenheitToCelsius(tempInput).toFixed(2)} °C, En Kelvin: ${fahrenheitToKelvin(tempInput).toFixed(2)} °K`;
    }
  
    resultMessage.textContent = result;
    resultMessage.style.color = "green";
  }
  