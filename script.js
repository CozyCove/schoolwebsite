
// Get references to the menu button and menu list
const menuButton = document.getElementById('menuButton');
const menuList = document.getElementById('menuList');

// Function to toggle the visibility of the menu list
function toggleMenu() {
  menuList.classList.toggle('show-menu');
}

// Attach a click event listener to the menu button
menuButton.addEventListener('click', toggleMenu);