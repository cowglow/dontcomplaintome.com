const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let randomNum = Math.floor(Math.random() * 6) + 1;
  const url = `/response/${randomNum}.json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
