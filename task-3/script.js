import birdData from './birdData.js';

const videoGrid = document.getElementById('video-grid');
const lightbox = document.getElementById('lightbox');
const closeModal = document.getElementById('close-modal');

const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

function initGallery() {
    birdData.forEach((bird, index) => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.dataset.index = index;

        card.innerHTML = `
            <img src="${bird.image}" alt="${bird.title}">
            <div class="info">
                <h4>${bird.title}</h4>
                <p>YouTube Birds</p>
                <p>${bird.views} • ${bird.uploaded}</p>
            </div>
        `;

        card.addEventListener('click', () => openModal(index));
        videoGrid.appendChild(card);
    });
}

/**
 * Open the modal/blog-page with selected bird data
 */
function openModal(index) {
    const bird = birdData[index];
    modalImage.src = bird.image;
    modalTitle.textContent = bird.title;
    modalDescription.textContent = bird.description;

    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

/**
 * Close the modal
 */
function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event Listeners
closeModal.addEventListener('click', closeLightbox);

// Close on clicking the backdrop
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ESC key to close
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

/**
 * Toggle Sidebar visibility
 */
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Run Init
initGallery();
