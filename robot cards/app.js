import { users } from "./user.js";
import { cardCreate } from "./card.js";

let row = document.querySelector(".row");
let maleBtn = document.querySelector("#male");
let femaleBtn = document.querySelector("#female");
let allBtn = document.querySelector("#all");
let input = document.querySelector("#name");

function render(obj) {
  row.innerHTML = "";
  obj.forEach((el) => {
    row.innerHTML += cardCreate(el);
  });
}

maleBtn.addEventListener("click", () => {
  let maleArray = users.filter((el) => el.gender === "Male");
  render(maleArray);
});
femaleBtn.addEventListener("click", () => {
  let femaleArray = users.filter((el) => el.gender === "Female");
  render(femaleArray);
});
allBtn.addEventListener("click", () => {
  render(users);
});

input.addEventListener("input", ({ target }) => {
  let newArray = users.filter((el) => {
    let full = el.first_name + el.last_name;
    return full.toLocaleLowerCase().includes(target.value);
  });
  render(newArray);
});

row.addEventListener("click", ({ target }) => {
  let id = target.closest(".col-3").getAttribute("data-id");
  let el = users.find((el) => el.id == id);
  console.log(users.indexOf(el));
  users.splice(users.indexOf(el), 1);
  render(users);
});

render(users);
