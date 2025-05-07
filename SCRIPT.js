let currentSlide = 0;
let direction = 1; // 1 para avanzar, -1 para retroceder

function moveSlide() {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    currentSlide += direction;

    // Si llega al final, cambia la dirección a -1 (para retroceder)
    if (currentSlide >= totalSlides - 1) {
        direction = -1;
    }

    // Si llega al inicio, cambia la dirección a 1 (para avanzar)
    if (currentSlide <= 0) {
        direction = 1;
    }

    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Mover automáticamente cada 3 segundos
setInterval(moveSlide, 3000);



