// Function to shuffle elements in an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to get a random array element
function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRandomArray(array, numElements) {
  let randomArray = [];
  for(let i=0; i < numElements; i++) {
    randomArray.push(getRandom(array));
  }
  
  return randomArray;
}

function disableButtonsInDiv(divId) {
  const div = document.getElementById(divId);
  if (div) {
    const buttons = div.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function enableButtonsInDiv(divId) {
  const div = document.getElementById(divId);
  if (div) {
    const buttons = div.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
}

export { shuffleArray, getRandom, getRandomArray, disableButtonsInDiv, enableButtonsInDiv };