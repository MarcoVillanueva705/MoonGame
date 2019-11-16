let player = {
  cheese: 0
};

let cheeseDisplay = document.querySelector('#cheesecount')

function mine() {
  player.cheese++;
  updateCheese();
}

function updateCheese() {
  cheeseDisplay.textContent = player.cheese.toString();
}


updateCheese()