function createElem() {
  let tag = document.createElement(arguments[0]);
  arguments[1] ? tag.classList.add(arguments[1]) : null;
  arguments[2] ? (tag.innerText = arguments[2]) : null;
  return tag;
}

function createInput() {
  let input = document.createElement(arguments[0]);
  input.type = arguments[1];
  input.placeholder = arguments[2];
  arguments[3] ? input.classList.add(arguments[3]) : null;
  return input;
}

export { createElem, createInput };
