const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function clearTwoCardArray(array) {
  array.pop();
  array.pop();
}

let clickedCards = [];
let matchedCards = [];
let noClicking;
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (noClicking) return;
  event.target.style.backgroundColor = event.target.className;
  if (!matchedCards.includes(event.target)) {
    clickedCards.push(event.target);
  }
  if (clickedCards.length === 2) {
    noClicking = true;
    if (clickedCards[clickedCards.length-1].className != clickedCards[clickedCards.length-2].className || 
      clickedCards[clickedCards.length-1] === clickedCards[clickedCards.length-2]) {
      setTimeout(function(){
        clickedCards[clickedCards.length-1].style.backgroundColor = "white";
        clickedCards[clickedCards.length-2].style.backgroundColor = "white";
        clearTwoCardArray(clickedCards);
        noClicking = false;
      }, 1000);
    } else if (clickedCards[clickedCards.length-1].className === clickedCards[clickedCards.length-2].className) {
      matchedCards.push(clickedCards[0]);
      matchedCards.push(clickedCards[1]);
      clearTwoCardArray(clickedCards);
      noClicking = false;
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
