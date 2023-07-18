'use strict'; // mostrar erros

// sons que serão usados ao clicar no botão.

const sons = {
    'A': 'Boom.wav',
    'S': 'clap.wav',
    'D': 'hithat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}


// essa função vai criar divs para os botões..

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key')
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);

}

const exibir = (sons) => {

    Object.keys(sons).forEach(criarDiv); // cada elemento que o forEach pegar ele vai mandar para a função "criarDiv" e a função criar div vai pegar um texto e criar uma div.

}

exibir(sons);

