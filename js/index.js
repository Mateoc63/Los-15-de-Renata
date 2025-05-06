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