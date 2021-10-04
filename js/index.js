const menuButton = document.getElementById('menuButton')
const closeButton = document.getElementById('closeButton')
const menuCover = document.getElementById('mobileMenuCover')
const main = document.querySelector(".main");

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  main.style.filter = "blur(8px)";
  
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'block';
  main.style.filter = "blur(0px)"

}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);