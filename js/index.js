const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const menuCover = document.getElementById('mobileMenuCover');
const main = document.querySelector('.main');
const mobileItems = document.querySelectorAll('.mobileMenuItems');

let modalState = 'closed';

function toggleMenu() {
  menuButton.style.display = 'none';
  menuCover.style.display = 'block';
  main.style.filter = 'blur(8px)';
}

function closeMenu() {
  menuCover.style.display = 'none';
  menuButton.style.display = 'block';
  main.style.filter = 'blur(0px)';
}

mobileItems.forEach((element) => {
  element.addEventListener('click', closeMenu);
});

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', closeMenu);

/** ******************MODAL POPUP******************* */

// Work section
const workSection = document.getElementById('portfolio');
const arrayOfProjects = [
  {
    image: './assets/proyecto1.png',
    name: 'Ecommerce Store',
    category: 'Ecommerce',
    live_version: 'https://www.puertoexpress.net',
    source_link: 'https://github.com/RafaelEchart/PersonalPortfolio',
    year: 2018,
    tech: ['ruby', 'css', 'Javascript', 'html'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: './assets/proyecto2.png',
    name: 'Ecommerce Dashboard',
    category: 'Ecommerce',
    live_version: 'http://admin.puertoexpress.net/',
    source_link: 'https://github.com/RafaelEchart/PersonalPortfolio',
    year: 2019,
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: './assets/proyecto3.png',
    name: 'Landing Page',
    category: 'Ecommerce',
    live_version: 'https://supercursoterbuzads.com/',
    source_link: 'https://github.com/RafaelEchart/PersonalPortfolio',
    year: 2020,
    tech: ['nodejs', 'css', 'Javascript', 'html'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

for (let x = 0; x < arrayOfProjects.length; x += 1) {
  workSection.innerHTML += `<div class="card division flex-card">
    <div class="align_images">
      <img
        src="${arrayOfProjects[x].image}"
        width="554"
        class="imagen_proyectos"
        alt="proyect Ecommerce"
      />
    </div>
    <div class="text_child">
        <h1>${arrayOfProjects[x].name}</h1>
        <div class="flex_child">
          <span class="little_category">${arrayOfProjects[x].category}</span>
          <span class="gray_text">• Full Stack Dev </span>
          <span class="gray_text">• ${arrayOfProjects[x].year}</span>
        </div>

        <p>
          ${arrayOfProjects[x].description.substr(0, 100)}...
        </p>

        <div class="division">
          ${arrayOfProjects[x].tech
    .map((tech) => `<label class="tag_label">${tech}</label>`)
    .join(' ')}
        </div>

        <button type="button" onclick="toggleModal(${x})" class="see_project_button">
          <span>See project</span>
        </button>
      </div>
  </div>`;
}

const modalTech = document.getElementById('modal-tech');

function toggleModal(position = null) {
  if (modalState === 'closed') {
    document.getElementById('modal-title').innerHTML = arrayOfProjects[position].name;
    document.getElementById('modal-img').src = arrayOfProjects[position].image;

    document.getElementById('see_live').onclick = function seeLive() {
      window.open(arrayOfProjects[position].live_version, '_blank');
    };

    document.getElementById('see_source').onclick = function seeSource() {
      window.open(arrayOfProjects[position].source_link, '_blank');
    };

    for (let i = 0; i < arrayOfProjects[position].tech.length; i += 1) {
      modalTech.innerHTML += `<label class="tag_label modal-tag-label" id="modal-tag">${arrayOfProjects[position].tech[i]}</li>`;
    }

    document.getElementById('modal-desc').innerHTML = arrayOfProjects[position].description;

    document.querySelector('.projectDetailsModal').style.display = 'block';
    document.querySelector('.projectDetailsModal').style.animation = 'open-modal 0.7s ease-out';

    modalState = 'open';
  } else {
    document.querySelector('.projectDetailsModal').style.animation = 'close-modal 0.7s ease-out';

    setTimeout(() => {
      document.querySelector('.projectDetailsModal').style.display = 'none';
    }, 700);

    modalTech.innerHTML = '';
    modalState = 'closed';
  }
}

document
  .querySelector('.close-modal')
  .addEventListener('click', () => toggleModal());
