

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
const characters =  arr.toString().split('');
return characters;
}
getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
 const idPhrase = document.getElementById('phrase');
 const phraseUl = document.querySelector('ul');


    for (characters in arr) {
        const li = document.createElement('li');
        li.textContent = characters;
        idPhrase.appendChild(li);
        li.classList.add('letter');
 }
};
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 



function checkLetter(button) {
 let letter = document.getElementsByClassName('letter');
   const lis = document.querySelectorAll('li');
    let match = null; 
    for (letter in lis) {
       if (button.textContent === lis.textContent ) {
        lis.classList.add('show');
        button.textContent.match; 
        return match; 
      }
   }
 }; 

 qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
   checkLetter(e.target);
   qwerty.classList.add('chosen'); 
    } else {

    }
 });  







