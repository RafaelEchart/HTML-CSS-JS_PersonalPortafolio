const menuButton = document.getElementById('menuButton')
const closeButton = document.getElementById('closeButton')
const menuCover = document.getElementById('mobileMenuCover')

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'block';
}

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);