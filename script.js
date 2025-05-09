const zooGrid = document.querySelector('.zoo-grid');
const toggleButton = document.getElementById('toggle-layout');
let isGrid = true;

// Función para cambiar el layout
toggleButton.addEventListener('click', () => {
  if (isGrid) {
    zooGrid.style.display = 'flex';
    zooGrid.style.flexDirection = 'row';
    zooGrid.style.flexWrap = 'wrap';
    zooGrid.style.justifyContent = 'center';
    toggleButton.textContent = 'Canvia a Grid';
  } else {
    zooGrid.style.display = 'grid';
    zooGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
    toggleButton.textContent = 'Canvia a Flex';
  }
  isGrid = !isGrid;
});

// Funcionalidad del modal
const modal = document.getElementById('animal-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalHabitat = document.getElementById('modal-habitat');
const modalDieta = document.getElementById('modal-dieta');
const modalConservacio = document.getElementById('modal-conservacio');
const modalCuriositat = document.getElementById('modal-curiositat');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

// Abrir modal al hacer clic en la imagen
document.querySelectorAll('.animal-image-container').forEach(container => {
  container.addEventListener('click', function() {
    const animalCard = this.closest('.animal');
    
    modalImage.src = this.querySelector('img').src;
    modalImage.alt = this.querySelector('img').alt;
    modalTitle.textContent = animalCard.querySelector('h2').textContent;
    modalHabitat.textContent = animalCard.dataset.habitat;
    modalDieta.textContent = animalCard.dataset.dieta;
    modalConservacio.textContent = animalCard.dataset.conservacio;
    modalCuriositat.textContent = animalCard.dataset.curiositat;
    modalDescription.textContent = animalCard.querySelector('p').textContent;
    
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
  });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Cerrar al hacer clic fuera del modal
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});