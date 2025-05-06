document.addEventListener("DOMContentLoaded", () => {
const flor = document.getElementById("florDecorativa");

const observer = new IntersectionObserver(
    ([entry]) => {
    if (entry.isIntersecting) {
        flor.classList.add("opacity-90", "scale-100");
    } else {
        flor.classList.remove("opacity-90", "scale-100");
        flor.classList.add("opacity-0", "scale-95");
    }
    },
    {
    threshold: 0.1, // Se activa cuando al menos el 10% de la flor es visible
    }
);

observer.observe(flor);
});
/*------------CARRUSEL-------------*/
const carousel = document.getElementById('carousel-images');
const totalSlides = carousel.children.length;
const indicators = document.getElementById('indicators').children;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('bg-rose-600', 'scale-125', 'opacity-100');
    indicators[i].classList.add('bg-rose-200', 'opacity-60');
    }
    indicators[currentIndex].classList.remove('bg-rose-200', 'opacity-60');
    indicators[currentIndex].classList.add('bg-rose-600', 'scale-125', 'opacity-100');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

setInterval(nextSlide, 3000);
updateCarousel();