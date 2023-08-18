document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeTextButton");
    const paragraph = document.querySelector("p");
  
    button.addEventListener("click", function() {
      paragraph.textContent = "Text has been changed!";
    });
  });