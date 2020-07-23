let jogadorNome;
let jogadorNomeMaximo = 25;
let jogadorEscolha = 0;
let computadorEscolha = 0;

let jogadorPontos = 0;
let computadorPontos = 0;

// Exibe mensagem
function mensagem(texto) {
  if (texto === "" || texto === null || texto === undefined) {
    return "Jogador";
  }
  document.getElementById('message').innerHTML = `${texto}, escolha uma mão acima... 🤞`;
}

function mensagemJogo(texto) {
  if (texto === "" || texto === null || texto === undefined) {
    return "Jogador";
  }
  document.getElementById('message').innerHTML = `${texto}`;
}

function nomeJogador(texto) {
  if (texto === "" || texto === null || texto === undefined) {
    return "Jogador";
  }
  document.getElementById('jogador').getElementsByClassName('jogador-nome')[0].innerHTML = texto;
}

function somarPontosJogador() {
  jogadorPontos++;
  document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

function somarPontosComputador() {
  computadorPontos++;
  document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

// Sorteia entre dois números
function sortear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica o ganhador
// 0 = Empate
// 1 = Jogador
// 2 = Computador
function calcularEscolha(jogador, computador) {
  if (jogador === 1 && computador === 1 || jogador === 2 && computador === 2 || jogador === 3 && computador === 3) {
    return 0;
  } else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    return 1;
  } else if (jogador === 1 && computador === 2 || jogador === 2 && computador === 3 || jogador === 3 && computador === 1) {
    return 2;
  }
}

// Atilet Mão
function selecionar(tipo, escolha) {
  document.getElementById(`${tipo}-escolha-${escolha}`).classList.add('active');
}
function deselecionar(tipo, escolha) {
  document.getElementById(`${tipo}-escolha-${escolha}`).classList.remove('active');
}

function jogar(escolha) {
  jogadorEscolha = escolha;
  selecionar('jogador', jogadorEscolha);

  // sortear a jogada do computador
  computadorEscolha = sortear(1, 3);
  selecionar('computador', computadorEscolha);

  // calcular quem ganhou
  let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

  switch (ganhador) {
    case 1:
      mensagemJogo(`Joga mtooo!!! 🎉🎉🎉`);
      somarPontosJogador();
      break;
    case 2:
      mensagemJogo(`Vergon da professión!! 🤦‍♂️`);
      somarPontosComputador();
      break;
    default:
      mensagemJogo(`Opora... empatou... 🤷‍♂️`);
  }

  if (jogadorPontos === 5) {
    mensagemJogo(`Parabéns!!! Você ganhou! 😁`);
    jogadorPontos = computadorPontos = 0;

    setTimeout(
      function pararClick() {
        document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
        document.getElementById('computador-pontos').innerHTML = computadorPontos;
      }, 5000
    );

  } else if (computadorPontos === 5) {
    mensagemJogo(`Eu sou inevitável, humano!! Muhuhaha 📱`);
    jogadorPontos = computadorPontos = 0;

    setTimeout(
      function pararClick() {
        document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
        document.getElementById('computador-pontos').innerHTML = computadorPontos;
      }, 5000
    );
  }

  setTimeout(
    function () {
      deselecionar('computador', computadorEscolha);
      deselecionar('jogador', jogadorEscolha);
    }, 750
  );

}

// exibir mão selecionada do usuário
document.getElementById('jogador-escolha-1').onclick = function () {
  jogar(1);
};
document.getElementById('jogador-escolha-2').onclick = function () {
  jogar(2);
};
document.getElementById('jogador-escolha-3').onclick = function () {
  jogar(3);
};


while (jogadorNome === "" || jogadorNome === undefined || jogadorNome === null || (jogadorNome !== null && jogadorNome.length > jogadorNomeMaximo)) {
  jogadorNome = window.prompt('Qual é o seu nome?');
}

mensagem(jogadorNome);
nomeJogador(jogadorNome);