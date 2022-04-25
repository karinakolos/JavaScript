function countAll() {
  document.querySelector(".todo__all").innerHTML =
    "All: " + document.querySelectorAll(".todo__wrapper").length;
}

function countCompleted() {
  document.querySelector(".todo__done").innerHTML =
    "Completed: " + document.querySelectorAll("[checked='true']").length;
}

export { countAll, countCompleted };
