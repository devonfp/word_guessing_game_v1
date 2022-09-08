

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = '0';

const phrases = [ 't', ' ', 'h', 'h', 'i', 'e', 'r', '',
'e'];

startGame.addEventListener('click', (e) => {
 overlay.style.display = 'none';
});
  

function getRandomPhraseAsArray(arr) {
 const randomPhrase = Math.floor(Math.random() * arr.length);
 return arr[randomPhrase];
}
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
 const idPhrase = document.getElementById('phrase');
 const phraseUl = document.querySelector('ul');
 li.textContent = ''; 

    for (each of li.textContent) {
        each.style.display = ''; 
        const li = document.createElement('li');
        li.appendChild(idPhrase.phraseUl);
 }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

