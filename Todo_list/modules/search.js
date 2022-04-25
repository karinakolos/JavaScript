export function search() {
  let searchPhrase = document
    .querySelector('input[type="search"]')
    .value.toLocaleLowerCase();
  console.log(searchPhrase);
  let todoName = "";
  todosWrapper.innerHTML = "";
  todos.forEach((el) => {
    todoName = el.text.toLocaleLowerCase();
    if (todoName.indexOf(searchPhrase) !== -1) {
      let wrapper = createElem("div", "todo__wrapper");
      let rowThird = createElem("div", "todo__text");
      let buttonCreate = createElem("button", "done", "✔️");
      let todoText = createElem("p", "todo__name", el.text);
      let buttonCancel = createElem("button", "delete", "🗑");
      let date = createElem("p", "todo__date", el.date);

      container.append(todosWrapper);
      todosWrapper.append(wrapper);
      wrapper.append(rowThird);
      wrapper.setAttribute("data-id", el.id);
      wrapper.setAttribute("checked", el.isChecked);
      rowThird.append(buttonCreate);
      rowThird.append(todoText);
      rowThird.append(buttonCancel);
      rowThird.append(date);

      console.log(searchPhrase, todoName);
    }
  });
}
