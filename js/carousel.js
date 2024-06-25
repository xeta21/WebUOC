// Espera a que se cargue todo el contenido HTML antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor del carrusel y los elementos individuales del carrusel
    const carousel = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.item');
    // Selecciona los botones de navegación del carrusel
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Inicializa el índice del primer artículo visible
    let index = 0;

    // Función para mostrar los elementos del carrusel en la posición correcta
    const showItems = () => {
        // Obtiene el ancho de un artículo individual del carrusel
        const itemWidth = items[0].clientWidth;
        // Calcula el ancho total del contenedor visible (4 artículos a la vez)
        const containerWidth = itemWidth * 4;
        // Calcula el desplazamiento necesario para mostrar el conjunto correcto de artículos
        const offset = index * itemWidth;

        // Aplica la transformación CSS para desplazar el carrusel horizontalmente
        carousel.style.transform = `translateX(-${offset}px)`;
    };

    // Evento click para el botón de navegación izquierdo
    prevBtn.addEventListener('click', () => {
        // Verifica si no estamos en el primer conjunto de artículos
        if (index > 0) {
            index--; // Reduce el índice para mostrar el conjunto anterior
            showItems(); // Actualiza la visualización del carrusel
        }
    });

    // Evento click para el botón de navegación derecho
    nextBtn.addEventListener('click', () => {
        // Verifica si hay suficientes artículos restantes para avanzar
        if (index < items.length - 4) { // Evita desbordamientos
            index++; // Incrementa el índice para mostrar el siguiente conjunto
            showItems(); // Actualiza la visualización del carrusel
        }
    });

    showItems(); // Inicializa el carrusel mostrando el primer conjunto de artículos
});
