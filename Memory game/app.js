const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");

let score = 0;
let checkCards = [];
let isWin = 0;
cardArray.sort(() => Math.random() - 0.5);

function boardCreate() {
  grid.innerHTML = " ";
  resultDisplay.innerHTML = " ";
  cardArray.forEach((el, i) => {
    let img = document.createElement("img");
    img.setAttribute("src", "images/blank.png");
    img.setAttribute("data-id", i);
    img.addEventListener("click", flip);
    grid.append(img);
  });
}

function flip() {
  let id = this.getAttribute("data-id");
  let img = cardArray[id].img;
  this.setAttribute("src", img);
  checkCards.push(img);
  setTimeout(() => {
    cardCheck();
  }, 500);
}

function cardCheck() {
  let cards = Array.from(document.querySelectorAll("img"));
  if (checkCards.length === 2) {
    // win
    if (checkCards[0] == checkCards[1]) {
      let copies = cards.filter(
        (el) => el.getAttribute("src") === checkCards[0]
      );
      copies.forEach((el) => {
        el.removeEventListener("click", flip);
        el.setAttribute("src", "images/white.png");
      });
      scoreCount(true);
      winCheck();
    } else {
      let first = cards.find((el) => el.getAttribute("src") == checkCards[0]);
      first.setAttribute("src", "images/blank.png");
      let second = cards.find((el) => el.getAttribute("src") == checkCards[1]);
      second.setAttribute("src", "images/blank.png");
      scoreCount(false);
    }
    checkCards.length = 0;
  }
}

function scoreCount(x) {
  x ? score++ : score--;
  resultDisplay.innerText = score;
}
function winCheck() {
  isWin++;

  if (isWin == cardArray.length / 2) {
    confirm("You win! Once again?") ? boardCreate() : null;
  }
}
boardCreate();
