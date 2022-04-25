let p = document.getElementById("number");
let AlltBtn = document.getElementById("start");
let lapBtn = document.getElementById("lap");

let sec = 0;
let min = 0;
let hrs = 0;
let timer;

let secunda = () => {
  let temp;
  if (sec < 10) {
    temp = `0${sec++}`;
  } else {
    temp = `${sec++}`;
  }
  return temp;
};
let minuta = () => {
  let temp;
  if (sec <= 59) {
  } else {
    sec = 0;
    if (min == 59) {
      min = 0;
    } else {
      min++;
    }
  }
  if (min < 10) {
    temp = `0${min}`;
  } else {
    temp = `${min}`;
  }

  return temp;
};

let hours = () => {
  let temp;
  if (min <= 59 && sec <= 59) {
  } else {
    hrs++;
  }
  if (hrs < 10) {
    temp = `0${hrs}`;
  } else {
    temp = `${hrs}`;
  }
  return temp;
};

function startTimer() {
  timer = setInterval(() => {
    p.innerText = `${hours()}:${minuta()}:${secunda()}`;
  }, 1000);
  AlltBtn.setAttribute("checked", "true");
}

function startOrStop() {
  if (document.querySelector("[checked=false]")) {
    startTimer();
  } else {
    clearInterval(timer);
    AlltBtn.setAttribute("checked", "false");
  }
}

lapBtn.addEventListener("click", () => {
  let tempHrs = hrs < 10 || hrs == 0 ? `0${hrs}` : hrs;
  let tempMin = min < 10 || min == 0 ? `0${min}` : min;
  let tempSec = sec < 11 || sec == 0 ? `0${sec - 1}` : sec - 1;
  let data = `${tempHrs}:${tempMin}:${tempSec}`;
  let p = document.createElement("p");
  p.innerText = data;
  document.body.append(p);
});

AlltBtn.addEventListener("click", startOrStop);
