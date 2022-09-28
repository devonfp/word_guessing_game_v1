

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = '0';

const phrases = [ 'hello there', 
                  'have a lovely day'];

startGame.addEventListener('click', (e) => {
   getRandomPhraseAsArray(phrases); 
   overlay.style.display = 'none';
});
  

function getRandomPhraseAsArray(arr) {
const randomPhrase = Math.floor(Math.random() * arr.length);
const characters =  arr[randomPhrase].split('');
addPhraseToDisplay(characters)
}


function addPhraseToDisplay(arr) {
 const phraseUl = document.querySelector('ul');


    arr.forEach (character => {
        const li = document.createElement('li');
        li.textContent = character;

        if(li.textContent === ' ') {
         li.classList.add('space');
    } else {
      li.classList.add('letter');
    }
        phraseUl.appendChild(li);
 })
};




function checkLetter(button) {
 let letters = document.getElementsByClassName('letter');
    let match = null; 
    for (let i = 0; i < letters.length; i++) {
       if (button.textContent === letters.textContent) {
        letters.classList.add('show');
        button.textContent.match; 
      } else {
        const replaceImage = document.querySelectorAll('src');
        replaceImage[missed] = src='images/lostHeart.png';
        missed++
        return match;     
      }
   }
   console.log(letters);
   console.log(checkLetter(button));            
 };

 qwerty.addEventListener('click', (e) => {

    const btn = e.target;

    if (btn.tagName === 'BUTTON') {
   checkLetter(btn);
   btn.classList.add('chosen'); 
   btn.disabled = true;
    }
 }); 



 function checkWin() {
   const letter = document.querySelectorAll('.letter li');
   const show = document.querySelectorAll('.show li');
   const headline = document.getElementsByClassName("header")

    if (show.length === letter.length) {
       overlay.classList.add('win');
       headline.textContent = 'Congrats, you win!';
       overlay.style.display = 'flex';
    }

   if (missed > 4) {
      overlay.classList.add('lose');
      headline.textContent = 'Sorry, you lose.';
      overlay.style.display = 'flex';
   }
}






