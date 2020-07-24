let playerName;
let playerNameMaxLength = 25;
let playerChoose = 0;
let computerChoose = 0;

let pointsPlayer = 0;
let pointsComputer = 0;

const reset = () => {
  pointsPlayer = pointsComputer = 0;
  document.getElementById('player-points').innerHTML = pointsPlayer;
  document.getElementById('computer-points').innerHTML = pointsComputer;
}

// Exibe Mensagem
function showMessage(text) {
  if (text === "" || text === null || text === undefined) {
    return "Jogador";
  }
  document.getElementById('message').innerHTML = `${text}, escolha uma mão acima... 🤞`;
}

function gameMessage(text) {
  if (text === "" || text === null || text === undefined) {
    return "Jogador";
  }
  document.getElementById('message').innerHTML = `${text}`;
}

function playerNameInsert(text) {
  if (text === "" || text === null || text === undefined) {
    return "Jogador";
  }
  document.getElementById('player').getElementsByClassName('player-name')[0].innerHTML = text;
}

function SumPointsPlayer() {
  pointsPlayer++;
  if (pointsPlayer === 5) {
    gameMessage(`Parabéns!!! Você ganhou! 😁`);
    setTimeout(reset, 3000);
  }
  document.getElementById('player-points').innerHTML = pointsPlayer;
}

function sumPointsComputer() {
  pointsComputer++;
  if (pointsComputer === 5) {
    gameMessage(`Eu sou inevitável, humano!! Muhuhaha 📱`);
    setTimeout(reset, 3000);
  }
  document.getElementById('computer-points').innerHTML = pointsComputer;
}

// Sorteia as mãos
function sort(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica o ganhador
// 0 = Empate
// 1 = Jogador
// 2 = Computador
function calculateChoose(player, computer) {
  if (player === 1 && computer === 1 || player === 2 && computer === 2 || player === 3 && computer === 3) {
    return 0;
  } else if (player === 1 && computer === 3 || player === 2 && computer === 1 || player === 3 && computer === 2) {
    return 1;
  } else if (player === 1 && computer === 2 || player === 2 && computer === 3 || player === 3 && computer === 1) {
    return 2;
  }
}

// Seleciona a Mão
function selectHand(type, choose) {
  document.getElementById(`${type}-choose-${choose}`).classList.add('active');
}
function deselectHand() {
  const maos = document.querySelectorAll('li a');

  [].forEach.call(maos, el => el.classList.remove('active'));

}

function playGame(choose) {
  playerChoose = choose;
  // sorteia a jogada do computer
  computerChoose = sort(1, 3);

  // calcular quem ganhou
  const winner = calculateChoose(playerChoose, computerChoose);

  switch (winner) {
    case 1:
      if (pointsComputer < 5 && pointsPlayer !== 5) {
        selectHand('player', playerChoose);
        selectHand('computer', computerChoose);

        gameMessage(`Joga mtooo!!! 🎉🎉🎉`);
        SumPointsPlayer();
      }
      break;
    case 2:
      if (pointsPlayer < 5 && pointsComputer !== 5) {
        selectHand('player', playerChoose);
        selectHand('computer', computerChoose);

        gameMessage(`Vergon da professión!! 🤦‍♂️`);
        sumPointsComputer();
      }
      break;
    default:
      (pointsComputer < 5 && pointsPlayer !== 5 || pointsPlayer < 5 && pointsComputer !== 5) && gameMessage(`Opora... empatou... 🤷‍♂️`);
  }

  setTimeout(() => deselectHand(), 750);
}

// exibir mão selecionada do usuário
document.getElementById('player-choose-1')
  .addEventListener('click', () => playGame(1));
document.getElementById('player-choose-2')
  .addEventListener('click', () => playGame(2));
document.getElementById('player-choose-3')
  .addEventListener('click', () => playGame(3));

while (playerName === "" || playerName === undefined || playerName === null || (playerName !== null && playerName.length > playerNameMaxLength)) {
  playerName = window.prompt('Qual é o seu nome?');
}

showMessage(playerName);
playerNameInsert(playerName);