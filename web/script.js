let wins = 0;
let losses = 0;
let ties = 0;

function play(userChoice) {
    const choices = ['kő', 'papír', 'olló'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = '';
    let userImg = `<img src="${userChoice}.png" alt="${userChoice}" width="50" height="50">`;
    let compImg = `<img src="${computerChoice}.png" alt="${computerChoice}" width="50" height="50">`;

    if (userChoice === computerChoice) {
        result = 'Döntetlen! Játssz újra!';
        document.getElementById('result').style.color = '#FFFFFF';
        ties++;
    } else if (
        (userChoice === 'kő' && computerChoice === 'olló') ||
        (userChoice === 'papír' && computerChoice === 'kő') ||
        (userChoice === 'olló' && computerChoice === 'papír')
    ) {
        result = 'Győztél! Gratulálok!';
        document.getElementById('result').style.color = '#00ff00';
        wins++;
    } else {
        result = 'Vesztettél! Próbáld újra!';
        document.getElementById('result').style.color = '#ff0000';
        losses++;
    }

    document.getElementById('result').innerHTML = `Te: ${userChoice} | Gép: ${computerChoice} <br> <br> ${result}`;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
    document.getElementById('result').style.transform = 'scale(1.2)';
    setTimeout(() => {
        document.getElementById('result').style.transform = 'scale(1)';
    }, 300);
}

function resetGame() {
    wins = 0;
    losses = 0;
    ties = 0;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.color = 'white';
}
