function setLocal(key, value) {
  let string = JSON.stringify(value);
  localStorage.setItem(key, string);
}

export { setLocal };
