document.addEventListener("DOMContentLoaded", function() {
      // Select the navigation button and menu
      const menuButton = document.getElementById("menuButton");
      const navMenu = document.getElementById("navMenu");
    
      // Add click event listener to toggle the visibility of the menu
      menuButton.addEventListener("click", function() {
        navMenu.classList.toggle("visible");
      });
    });
