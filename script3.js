
function getComputerChoice() {
    const choices = ['Piedra', 'Papel', 'Tijera','Lagarto','Spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';  // Empate
    }
    if (
        (userChoice === 'Piedra' && computerChoice === 'Tijera') ||
        (userChoice === 'Papel' && computerChoice === 'Piedra') ||
        (userChoice === 'Tijera' && computerChoice === 'Papel') ||
        (userChoice === 'Piedra' && computerChoice === 'Lagarto') ||
        (userChoice === 'Lagarto' && computerChoice === 'Spock') ||
        (userChoice === 'Spock' && computerChoice === 'Tijera') ||
        (userChoice === 'Tijera' && computerChoice === 'Lagarto') ||
        (userChoice === 'Lagarto' && computerChoice === 'Papel') ||
        (userChoice === 'Papel' && computerChoice === 'Spock') ||
        (userChoice === 'Spock' && computerChoice === 'Piedra') 
    ) {
        return 'win';  
    }
    return 'lose';  
}

// Función para actualizar la interfaz con el resultado
function playGame(userChoice) {
    
    const computerChoice = getComputerChoice();

    
    const result = getWinner(userChoice, computerChoice);

    // Actualizar el contenido en la interfaz
    document.getElementById('user-choice').textContent = `Tu elección: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Elección de la computadora: ${computerChoice}`;

    const winnerElement = document.getElementById('winner');
    winnerElement.textContent = result === 'draw' ? '¡Es un empate!' : result === 'win' ? '¡Ganaste!' : '¡Perdiste!';
    
   
    winnerElement.classList.remove('win', 'lose', 'draw');
    winnerElement.classList.add(result);
    
    cambiarImagen(computerChoice) ;

}

function cambiarImagen( computerChoice) {
    imagen_containers = [
        "c-piedra",
        "c-papel",
        "c-tijera",
        "c-lagarto",
        "c-spock"
    ]
    
    imagen_containers.forEach((imagen, index) => {
        let coputerImage = document.getElementById(imagen);
        coputerImage.src = "defecto.png";
    });
    // Cambiar imagen de la computadora
    let computerImage = document.getElementById(`c-${computerChoice.toLowerCase()}`);
    computerImage.src = `${computerChoice.toLowerCase()}.png`;
}

document.getElementById('piedra').addEventListener('click', function() {
    playGame('Piedra');
});

document.getElementById('papel').addEventListener('click', function() {
    playGame('Papel');
});

document.getElementById('tijera').addEventListener('click', function() {
    playGame('Tijera');
});

document.getElementById('lagarto').addEventListener('click', function() {
    playGame('Lagarto');
});

document.getElementById('spock').addEventListener('click', function() {
    playGame('Spock');
});