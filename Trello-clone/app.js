let body = document.querySelector("body");
let popup = document.querySelector(".popup");
let inputSearch = document.getElementById("search");
let navData = document.querySelector(".nav__time");
let newTaskHeader = document.querySelector(".nav__add");
let newTaskToDo = document.querySelector(".todo-container__button");
let popupCancel = document.querySelector(".popup__button-cancel");
let popupCancelEdit = document.querySelector(".popup__button-cancel-edit");
let popupConfirm = document.querySelector(".popup__button-confirm");
let popupConfirmEdit = document.querySelector(".popup__button-confirm-edit");
let overlay = document.querySelector(".overlay");
let select = document.getElementById("select");
let selectEdit = document.getElementById("select-edit");
let todoWrapper = document.querySelector(".todo-wrapper");
let popupTitle = document.getElementById("input-title");
let popupDescription = document.getElementById("input-description");
let popupDeadline = document.getElementById("input-deadline");
let popupUser = document.getElementById("select");
let popupTitleEdit = document.getElementById("input-title-edit");
let popupDescriptionEdit = document.getElementById("input-description-edit");
let popupDeadlineEdit = document.getElementById("input-deadline-edit");
let popupUserEdit = document.getElementById("select-edit");

let id = 0;
let data = [];
let localData = localStorage.getItem("data");
let localID = localStorage.getItem("dataID");
if (localData) {
  data = JSON.parse(localData);
  renderTodo();
}
if (localID) {
  id = JSON.parse(localID);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    addUsers(json);
    addUsersEdit(json);
  });

function addUsers(array) {
  array.forEach((el) => {
    let option = document.createElement("option");
    option.value = el.name;
    option.innerText = el.name;
    select.append(option);
  });
}
function addUsersEdit(array) {
  array.forEach((el) => {
    let option = document.createElement("option");
    option.value = el.name;
    option.innerText = el.name;
    selectEdit.append(option);
  });
}
function saveID() {
  setLocal("dataID", id);
}
function setLocal(key, value) {
  let string = JSON.stringify(value);
  localStorage.setItem(key, string);
}
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
popupConfirm.addEventListener("click", () => {
  let obj = {
    title: ucFirst(popupTitle.value),
    description: ucFirst(popupDescription.value),
    user: select.value,
    time: popupDeadline.value,
    id: ++id,
    status: "todo",
  };
  data.push(obj);
  setLocal("data", data);
  saveID();
  body.classList.remove("popup-opened");
  popupTitle.value = "";
  popupDescription.value = "";
  popupDeadline.value = "";
  popupUser.value = "";

  renderTodo();
});
function renderTodo() {
  todoWrapper.innerHTML = " ";
  data.forEach((el) => {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.setAttribute("data-id", el.id);
    let todoTitle = document.createElement("div");
    todoTitle.classList.add("todo__title");
    todoTitle.innerText = el.title;

    let todoDescription = document.createElement("div");
    todoDescription.classList.add("todo__description");
    todoDescription.innerText = el.description;

    let todoUser = document.createElement("div");
    todoUser.classList.add("todo__user");

    let todoUserName = document.createElement("span");
    todoUserName.innerText = el.user;

    let todoTime = document.createElement("span");
    todoTime.innerText = el.time;

    let todoAllBtn = document.createElement("div");
    todoAllBtn.classList.add("todo__button");

    let todoBtnEdit = document.createElement("button");
    todoBtnEdit.classList.add("todo__button-edit");
    todoBtnEdit.innerText = "edit";

    let todoBtnDelete = document.createElement("button");
    todoBtnDelete.classList.add("todo__button-delete");
    todoBtnDelete.innerText = "delete";

    let todoBtnNext = document.createElement("button");
    todoBtnNext.classList.add("todo__button-next");
    todoBtnNext.innerText = "›";

    todo.append(todoTitle);
    todo.append(todoDescription);
    todoUser.append(todoUserName);
    todoUser.append(todoTime);
    todo.append(todoUser);
    todoAllBtn.append(todoBtnEdit);
    todoAllBtn.append(todoBtnDelete);
    todoAllBtn.append(todoBtnNext);
    todo.append(todoAllBtn);

    todoWrapper.append(todo);
  });
}
let todo = document.querySelector(".todo");

navData.innerText = new Date().toLocaleTimeString().slice(0, -3);
navData.addEventListener(
  "mouseover",
  () => (navData.innerText = new Date().toLocaleDateString())
);
navData.addEventListener(
  "mouseout",
  () => (navData.innerText = new Date().toLocaleTimeString().slice(0, -3))
);
newTaskHeader.addEventListener("click", () =>
  body.classList.add("popup-opened")
);
newTaskToDo.addEventListener("click", () => body.classList.add("popup-opened"));
overlay.addEventListener("click", () => {
  body.classList.remove("popup-opened");
  body.classList.remove("popup__edit-opened");
});
popupCancel.addEventListener("click", () => {
  body.classList.remove("popup-opened");
});
popupCancelEdit.addEventListener("click", () => {
  body.classList.remove("popup__edit-opened");
});
console.log(data);
inputSearch.addEventListener("input", ({ target }) => {
  let newArray = data.filter((el) => {
    let full = el.title + el.description;
    return full.toLocaleLowerCase().includes(target.value);
  });
  renderTodo(newArray);
});
//  todo button
todo.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("todo__button-delete")) {
    let todo = target.getAttribute("data-id");
    let item = data.find((e) => e.id == todo);
    data.splice(data.indexOf(item), 1);
    setLocal("data", data);
    target.parentElement.parentElement.remove();
  }
});
todo.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("todo__button-edit")) {
    let todo = target.parentElement.parentElement.getAttribute("data-id");
    let item = data.find((e) => e.id == todo);
    body.classList.add("popup__edit-opened");
    popupTitleEdit.value = item.title;
    popupDescriptionEdit.value = item.description;
    popupDeadlineEdit.value = item.time;
    popupUserEdit.value = item.user;
    popupConfirmEdit.addEventListener("click", () => {
      let obj = {
        title: ucFirst(popupTitleEdit.value),
        description: ucFirst(popupDescriptionEdit.value),
        user: selectEdit.value,
        time: popupDeadlineEdit.value,
        id: item.id,
        status: "todo",
      };
      data.splice(data.indexOf(item), 1);
      data.push(obj);
      setLocal("data", data);
      saveID();
      body.classList.remove("popup__edit-opened");
      renderTodo();
    });
  }
});
