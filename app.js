let player = {
  cheese: 0
};

let cheeseDisplay = document.querySelector('#cheesecount')

let axeDisplay = document.querySelector('#axecount')


let cartDisplay = document.querySelector('#cartcount')

let minerDisplay = document.querySelector('#minercount')

let roverDisplay = document.querySelector('#rovercount')

let modDisplay = document.querySelector
  ('#modcount')

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
  modDisplay.textContent = (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier).toString();
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
    draw();
  }
}

function buyMiner() {
  if (player.cheese >= clickUpgrades.miners.price) {
    player.cheese -= clickUpgrades.miners.price;
    clickUpgrades.miners.quantity++;
    draw();
  }
}

function buyRover() {
  if (player.cheese >= automaticUpgrades.rovers.price) {
    player.cheese -= automaticUpgrades.rovers.price;
    automaticUpgrades.rovers.quantity++;
    roverDisplay.textContent = automaticUpgrades.rovers.quantity.toString();
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