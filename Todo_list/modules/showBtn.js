function showCompleted() {
  let all = document.querySelectorAll(".todo__wrapper");
  all.forEach((element) => {
    element.style.display = "none";
  });
  let completed = document.querySelectorAll("[checked='true']");
  completed.forEach((element) => {
    element.style.display = "block";
  });
}

function showAll() {
  let all = document.querySelectorAll(".todo__wrapper");
  all.forEach((element) => {
    element.style.display = "block";
  });
}

function changeButton() {
  let elements = document.querySelectorAll(".done");
  elements.forEach((element) => {
    let parent = element.parentElement.parentElement;
    let todoDone = parent.getAttribute("checked");
    if (todoDone == "false") {
      element.innerHTML = "✔";
    } else {
      element.innerHTML = "✖";
    }
  });
}

export { showAll, showCompleted, changeButton };
