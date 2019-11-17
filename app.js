let player = {
  cheese: 0
};

let cheeseDisplay = document.querySelector('#cheesecount')

let axeDisplay = document.querySelector('#axecount')

let cartDisplay = document.querySelector('#cartcount')

let minerDisplay = document.querySelector('#minercount')

let roverDisplay = document.querySelector('#rovercount')

let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  carts: {
    price: 300,
    quantity: 0,
    multiplier: 5
  },
  miners: {
    price: 500,
    quantity: 0,
    multiplier: 10
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};

function mine() {
  player.cheese++;
  updateCheese();
}

function updateCheese() {
  cheeseDisplay.textContent = player.cheese.toString();
}

function buyPickaxe() {
  if (player.cheese > clickUpgrades.pickaxes.price) {
    player.cheese - clickUpgrades.pickaxes.price;
    clickUpgrades.pickaxes.quantity++;
    axeDisplay.textContent = clickUpgrades.pickaxes.quantity.toString();
  }
}

function buyCart() {
  if (player.cheese > clickUpgrades.carts.price) {
    player.cheese - clickUpgrades.carts.price;
    clickUpgrades.carts.quantity++;
    cartDisplay.textContent = clickUpgrades.carts.quantity.toString();
  }
}

function buyMiner() {
  if (player.cheese > clickUpgrades.miners.price) {
    player.cheese - clickUpgrades.miners.price;
    clickUpgrades.miners.quantity++;
    minerDisplay.textContent = clickUpgrades.miners.quantity.toString();
  }
}

// function buyRover() {
//   if (player.cheese > automaticUpgrades.rovers.price) {
//     player.cheese - automaticUpgrades.rovers.price;
//     automaticUpgrades.rovers.quantity++;
//     roverDisplay.textContent = automaticUpgrades.rovers.quantity.toString();
//   }
// }

function collectAutoUpgrades() {
  for (const automaticUpgrades.rovers.quantity in automaticUpgrades) {
  }

  updateCheese()