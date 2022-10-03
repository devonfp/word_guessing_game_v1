// Global-scope variables
const buttons = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const hearts = document.querySelectorAll('.tries img');
let missed = 0;

const phrases = [ 'Above and Beyond', 
                  'Helping Hand', 'A perfect storm', 'A piece of cake', 'Good Vibes'];

 // Opens the game after clicking "Start Game"                 
startGame.addEventListener('click', (e) => {
   getRandomPhraseAsArray(phrases); 
   overlay.style.display = 'none';
});
  
// Randomly chooses a phrase from the phrases array
function getRandomPhraseAsArray(arr) {
const randomPhrase = Math.floor(Math.random() * arr.length);
const characters =  arr[randomPhrase].split('');
addPhraseToDisplay(characters);
}


// After randomly choosing, the random phrase gets appended to the DOM
function addPhraseToDisplay(arr) {
    arr.forEach (character => {
        const li = document.createElement('li');
        li.textContent = character;

        if(li.textContent === ' ') {
         li.classList.add('space');
    } else {
      li.classList.add('letter');
    }
        phrase.appendChild(li);
 });
}



// How the game responds based on what letter the user has selected
function checkLetter(button) {
 let letters = document.getElementsByClassName('letter');
    let match = null; 
    for (let i = 0; i < letters.length; i++) {
       if (button.textContent === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        match = button.textContent;
      } 
   }
   return match;      
 }


 //Listens for a user to click a button on the on-screen keyboard
 buttons.addEventListener('click', (e) => {

    const btn = e.target;

    if (btn.tagName === 'BUTTON') {
   const match = checkLetter(btn);
   btn.classList.add('chosen'); 
   btn.disabled = true;
   if (!match) {
    hearts[missed].src = 'images/lostHeart.png';
    missed++
   }
   checkWin();
    }
 }); 





// Checks if the user won or lost
 function checkWin() {
   const letter = document.querySelectorAll('.letter');
   const show = document.querySelectorAll('.show');
   const headline = document.querySelector(".title");

    if (show.length === letter.length) {
       overlay.classList.add('win');
       headline.textContent = 'Congrats, you win!';
       startGame.textContent = 'Back To Start'
       startGame.addEventListener('click', (e) => {
         document.body.innerHTML = "";
         window.location.reload()
       })
       overlay.style.display = 'flex';
    }

   if (missed > 4) {
      overlay.classList.add('lose');
      headline.textContent = 'Sorry, you lose.';
      startGame.textContent = 'Back To Start';
       startGame.addEventListener('click', (e) => {
         document.body.innerHTML = "";
         window.location.reload()
         overlay.style.display = 'none';
       })
      overlay.style.display = 'flex';
   }
}





