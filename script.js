document.addEventListener("DOMContentLoaded", function() {
  const rollButton = document.getElementById("rollButton");
  const dice = document.getElementById("dice");

  rollButton.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;
  });
});
