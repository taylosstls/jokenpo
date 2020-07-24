let playerName;
let playerNameMaximo = 25;
let playerChoose = 0;
let computerChoose = 0;

let pointsPlayer = 0;
let pointsComputer = 0;

// Exibe mensagem
function mensagem(text) {
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

function nomeJogador(text) {
  if (text === "" || text === null || text === undefined) {
    return "Jogador";
  }
  document.getElementById('jogador').getElementsByClassName('jogador-nome')[0].innerHTML = text;
}

function SumPointsPlayer() {
  pointsPlayer++;
  document.getElementById('jogador-pontos').innerHTML = pointsPlayer;
}

function sumPointsComputer() {
  pointsComputer++;
  document.getElementById('computador-pontos').innerHTML = pointsComputer;
}

// Sorteia entre dois números
function sort(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica o ganhador
// 0 = Empate
// 1 = Jogador
// 2 = Computador
function calculateChoose(jogador, computador) {
  if (jogador === 1 && computador === 1 || jogador === 2 && computador === 2 || jogador === 3 && computador === 3) {
    return 0;
  } else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    return 1;
  } else if (jogador === 1 && computador === 2 || jogador === 2 && computador === 3 || jogador === 3 && computador === 1) {
    return 2;
  }
}

// Atilet Mão
function selectHand(tipo, escolha) {
  document.getElementById(`${tipo}-escolha-${escolha}`).classList.add('active');
}
function deselectHand() {
  const maos = document.querySelectorAll('li a');

  [].forEach.call(maos, function (el) {
    el.classList.remove('active');
  });

}

function playGame(escolha) {
  playerChoose = escolha;
  selectHand('jogador', playerChoose);

  // sorteia a jogada do computador
  computerChoose = sort(1, 3);
  selectHand('computador', computerChoose);

  // calcular quem ganhou
  const winner = calculateChoose(playerChoose, computerChoose);

  switch (winner) {
    case 1:
      gameMessage(`Joga mtooo!!! 🎉🎉🎉`);
      SumPointsPlayer();
      break;
    case 2:
      gameMessage(`Vergon da professión!! 🤦‍♂️`);
      sumPointsComputer();
      break;
    default:
      gameMessage(`Opora... empatou... 🤷‍♂️`);
  }

  if (pointsPlayer === 5) {
    gameMessage(`Parabéns!!! Você ganhou! 😁`);
    pointsPlayer = pointsComputer = 0;

    setTimeout(
      function pararClick() {
        document.getElementById('jogador-pontos').innerHTML = pointsPlayer;
        document.getElementById('computador-pontos').innerHTML = pointsComputer;
      }, 3000
    );

  } else if (pointsComputer === 5) {
    gameMessage(`Eu sou inevitável, humano!! Muhuhaha 📱`);
    pointsPlayer = pointsComputer = 0;

    setTimeout(
      function pararClick() {
        document.getElementById('jogador-pontos').innerHTML = pointsPlayer;
        document.getElementById('computador-pontos').innerHTML = pointsComputer;
      }, 5000
    );
  }

  setTimeout(
    function () {
      deselectHand();
    }, 750
  );

}

// exibir mão selecionada do usuário
document.getElementById('jogador-escolha-1')
  .addEventListener('click', function () {
    playGame(1);
  });
document.getElementById('jogador-escolha-2')
  .addEventListener('click', function () {
    playGame(2);
  });
document.getElementById('jogador-escolha-3')
  .addEventListener('click', function () {
    playGame(3);
  });


while (playerName === "" || playerName === undefined || playerName === null || (playerName !== null && playerName.length > playerNameMaximo)) {
  playerName = window.prompt('Qual é o seu nome?');
}

mensagem(playerName);
nomeJogador(playerName);