document.addEventListener("DOMContentLoaded", function() {
  const countdownDateInput = document.getElementById("countdownDate");
  const startButton = document.getElementById("startButton");
  const countdownDisplay = document.getElementById("countdown");

  startButton.addEventListener("click", function() {
    const countdownDate = new Date(countdownDateInput.value).getTime();
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;
      
      if (timeRemaining <= 0) {
        clearInterval(interval);
        countdownDisplay.textContent = "Countdown expired!";
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  });
});
