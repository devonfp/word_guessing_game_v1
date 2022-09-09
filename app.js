

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = '0';

const phrases = [ 'hello there', ' ', 'nice to', ' ', 'meet you', ' ', 'I hope', ' ', 'you have', ' ', 'a lovely day'];

startGame.addEventListener('click', (e) => {
 overlay.style.display = 'none';
});
  

function getRandomPhraseAsArray(arr) {
 const randomPhrase = Math.floor(Math.random() * arr.length);
 // split?
 return arr[randomPhrase];
}
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
 const idPhrase = document.getElementById('phrase');
 const phraseUl = document.querySelector('ul');


    for (/*character*/ in arr) {
        const li = document.createElement('li');
        li.textContent = /*'character'*/ 
        li.appendChild(idPhrase.phraseUl);
 }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

