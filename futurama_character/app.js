const baseURL = "https://pokeapi.co";

fetch(baseURL)
  .then((resp) => resp.json())

  .then((data) => console.log(data));
