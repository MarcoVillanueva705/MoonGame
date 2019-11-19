let player = {
  cheese: 0
};

let cheeseDisplay = document.querySelector('#cheesecount')

let axeDisplay = document.querySelector('#axecount')


let cartDisplay = document.querySelector('#cartcount')

let minerDisplay = document.querySelector('#minercount')

let roverDisplay = document.querySelector('#rovercount')

let pickModDisplay = document.querySelector
  ('#pickmodcount')

let cartModDisplay = document.querySelector('#cartmodcount')

let minerModDisplay = document.querySelector('#minermodcount')

let roverModDisplay = document.querySelector('#rovermodcount')

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
  draw();
}


function draw() {
  cheeseDisplay.textContent = player.cheese.toString();
  axeDisplay.textContent = clickUpgrades.pickaxes.quantity.toString();
  cartDisplay.textContent = clickUpgrades.carts.quantity.toString();
  minerDisplay.textContent = clickUpgrades.miners.quantity.toString();
  pickModDisplay.textContent = (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier).toString();
  cartModDisplay.textContent = (clickUpgrades.carts.quantity * clickUpgrades.carts.multiplier).toString();
  minerModDisplay.textContent = (clickUpgrades.miners.quantity * clickUpgrades.miners.multiplier).toString();
  // FIXME add the amount of multiplier this adds this is the qty times the multiplier
}

function buyPickaxe() {
  if (player.cheese >= clickUpgrades.pickaxes.price) {
    player.cheese -= clickUpgrades.pickaxes.price;
    //FIXME this currently performs a math opertion but does not reduce the cheese value
    clickUpgrades.pickaxes.quantity++;
    player.cheese += clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier;
    clickUpgrades.pickaxes.price *= 3;
    // //FIXME dont forget to increase the price of the pickaxe!
    draw();
  }
}

function buyCart() {
  if (player.cheese >= clickUpgrades.carts.price) {
    player.cheese -= clickUpgrades.carts.price;
    clickUpgrades.carts.quantity++;
    clickUpgrades.carts.price *= 3;
    draw();
  }
}

function buyMiner() {
  if (player.cheese >= clickUpgrades.miners.price) {
    player.cheese -= clickUpgrades.miners.price;
    clickUpgrades.miners.quantity++;
    clickUpgrades.miners.price *= 3;
    draw();
  }
}

function buyRover() {
  if (player.cheese >= automaticUpgrades.rovers.price) {
    player.cheese -= automaticUpgrades.rovers.price;
    automaticUpgrades.rovers.quantity++;
    automaticUpgrades.rovers.price *= 2;
    roverDisplay.textContent = automaticUpgrades.rovers.quantity.toString();
    roverModDisplay.textContent = (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier).toString();
    startInterval();
  }
}

function collectAutoUpgrades() {
  for (let item in automaticUpgrades) {
    // FIXME use bracket notation to access the correct properties and add them to the resources
    //[item] in a for in loop is the first reference point for rover and everything in it...if there were another property like shuttle, then in the next iteration it would hit shuttle, then the following iteration would be rover etc
    player.cheese += automaticUpgrades[item].quantity * automaticUpgrades[item].multiplier;

    draw();
  }
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
}

draw()