// Arreglo que guarda el índice actual de cada carrusel, inicializado en 0 para cada uno
let currentSlide = [0, 0, 0, 0];

// Función para mostrar una diapositiva específica en un carrusel dado
function showSlide(carouselIndex, slideIndex) {
    // Obtener el elemento del carrusel específico según el índice
    const carousel = document.getElementById(`carousel${carouselIndex}`);
    // Obtener el contenedor de imágenes dentro del carrusel
    const images = carousel.querySelector('.carousel-images');
    // Calcular el total de imágenes dentro del carrusel
    const totalImages = images.querySelectorAll('img').length;
    // Número de imágenes visibles a la vez en el carrusel
    const visibleImages = 4;

    // Lógica para asegurar que el índice de la diapositiva esté dentro de los límites
    if (slideIndex >= totalImages - visibleImages + 1) {
        // Si el índice excede el número de imágenes visibles desde el final, reiniciar al principio
        currentSlide[carouselIndex - 1] = 0;
    } else if (slideIndex < 0) {
        // Si el índice es menor que 0, ajustar al último conjunto de imágenes visibles
        currentSlide[carouselIndex - 1] = totalImages - visibleImages;
    } else {
        // Caso normal: establecer el índice actual según el valor proporcionado
        currentSlide[carouselIndex - 1] = slideIndex;
    }

    // Aplicar transformación CSS para desplazar las imágenes horizontalmente
    images.style.transform = `translateX(${-currentSlide[carouselIndex - 1] * 25}%)`;
}

// Función para avanzar a la siguiente diapositiva en un carrusel dado
function nextSlide(carouselIndex) {
    // Llamar a showSlide con el índice de carrusel y el índice de diapositiva incrementado
    showSlide(carouselIndex, currentSlide[carouselIndex - 1] + 1);
}

// Función para retroceder a la diapositiva anterior en un carrusel dado
function prevSlide(carouselIndex) {
    // Llamar a showSlide con el índice de carrusel y el índice de diapositiva decrementado
    showSlide(carouselIndex, currentSlide[carouselIndex - 1] - 1);
}
