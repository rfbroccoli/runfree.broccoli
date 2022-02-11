document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display-box");
  const button = document.querySelector(".generate-button");
  const number = document.querySelector(".number");
  display.innerHTML = "John Smith";

  const names = ["Aung", "Aye", "Bo", "Daung", "Hein"];

  function generateName(num) {
    let name = "";
    for (let i = 0; i < num; i++) {
      const randomNumber = Math.floor(Math.random() * names.length);
      name += names[randomNumber] + " ";
    }
    display.innerHTML = name;
  }

  button.addEventListener("click", function () {
    generateName(number.value);
  });
});
