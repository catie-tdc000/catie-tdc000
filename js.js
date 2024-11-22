let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showLightbox();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showLightbox();
});

function showLightbox() {
    lightbox.style.display = 'block';
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].alt;
}