'use strict'; // mostrar erros

// sons que serão usados ao clicar no botão.

const sons = {
    'A': '04-DRUM-KIT_sounds_Boom.wav',
    'S': '04-DRUM-KIT_sounds_clap.wav',
    'D': '04-DRUM-KIT_sounds_hihat.wav',
    'F': '04-DRUM-KIT_sounds_kick.wav',
    'G': '04-DRUM-KIT_sounds_openhat.wav',
    'H': '04-DRUM-KIT_sounds_ride.wav',
    'J': '04-DRUM-KIT_sounds_snare.wav',
    'K': '04-DRUM-KIT_sounds_tink.wav',
    'L': '04-DRUM-KIT_sounds_tom.wav',
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

 // Som que irá tocar ao pressionar o botão
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();


}

const ativarDiv = (event) => {
    const letra = event.target.id;
    const letraPermitida = sons.hasOwnProperty(letra) // se falso, se não clicar em um container não vai tocar a musica, se verdadeiro tocará.
    if(letraPermitida) {

        tocarSom(letra); // tocará o som da letra que eu clicar.

    }

    
    


}

exibir(sons); 

document.getElementById(`container`).addEventListener(`click`, ativarDiv); // Ao clicar no botão vai ativar a div.
