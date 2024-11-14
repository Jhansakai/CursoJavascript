
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }
  
  const randomNumber = getRandomArbitrary(1, 50);
  
  let attempts = 0;
  
  function checkGuess() {
    const userInput = document.getElementById("userInput").value;
    const resultMessage = document.getElementById("resultMessage");
    const attemptsMessage = document.getElementById("attemptsMessage");
  
    
    attempts++;
    
    if (userInput == randomNumber) {
      resultMessage.textContent = "¡Adivinaste!";
      resultMessage.style.color = "green";
    } else if (userInput < 1 || userInput > 50) {
      resultMessage.textContent = "Por favor, ingresa un número entre 1 y 50.";
      resultMessage.style.color = "red";

    
    } else {
      let pista = "Esto es una pista"
      
      if (userInput > randomNumber )
       { 
       pista = "El numero que ingresaste es mayor"
      }
      else{
      pista =  "es numero que ingresaste es menor"
      }
      resultMessage.textContent = "Sigue intentando."+pista ;
      resultMessage.style.color = "orange";
    }
  
    attemptsMessage.textContent = `Intentos restantes: ${10 - attempts}`;
  
    if (attempts >= 10) {
      attemptsMessage.textContent = `¡Has alcanzado el límite de intentos! El número era: ${randomNumber}`;
      attemptsMessage.style.color = "red";
      document.querySelector("button").disabled = true; 
    }
  }
  