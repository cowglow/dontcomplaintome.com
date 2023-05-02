const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button[type='submit']");
const label = document.querySelector("label[for='complaint']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let randomNum = Math.floor(Math.random() * 9) + 1;
  const url = `/response/${randomNum}.json`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      label.innerHTML = ""
      const complaintText = document.createElement("h3");
      complaintText.textContent = data.response;
      form.replaceChild(complaintText, textarea);
      submitBtn.textContent = "Make a new complaint";
      submitBtn.addEventListener("click", () => location.reload());
    });
});
