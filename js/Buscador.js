// Esperar a que se cargue el DOM antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Definir un array de objetos con información de cada cómic
    const comics = [
        { src: 'images/Articulo1.jpg', name: 'Superman' },
        { src: 'images/Articulo2.jpg', name: 'X-men' },
        { src: 'images/Articulo3.jpg', name: 'Superman' },
        { src: 'images/Articulo4.jpg', name: 'Titans' },
        { src: 'images/Articulo5.jpg', name: 'Secret Wars' },
        { src: 'images/Articulo6.jpg', name: 'Joker' },
        { src: 'images/Articulo7.png', name: 'Manual' },
        { src: 'images/Articulo8.jpg', name: 'Guía' },
        { src: 'images/articulo9.jfif', name: 'Guía' },
        { src: 'images/articulo10.jfif', name: 'Guía' },
        { src: 'images/articulo11.jpg', name: 'Guía' },
        { src: 'images/articulo12.jfif', name: 'Guía' },
        { src: 'images/articulo13.jfif', name: 'Marvel' },
        { src: 'images/articulo14.jpg', name: 'Marvel' },
        { src: 'images/articulo15.jpg', name: 'Marvel' },
        { src: 'images/Articulo16.jpg', name: 'Marvel' },
        { src: 'images/articulo17.jfif', name: 'Marvel' },
        { src: 'images/articulo18.jpg', name: 'X-men' },
        { src: 'images/articulo19.jfif', name: 'X-men' },
        { src: 'images/articulo20.jpg', name: 'X-men, marvel' },
        { src: 'images/articulo21.jfif', name: 'X-men' },
        { src: 'images/articulo22.jfif', name: 'X-men' },
        { src: 'images/articulo23.jpeg', name: 'X-men' },
        { src: 'images/articulo24.jfif', name: 'X-men' },
    ];

// Obtener el elemento donde se mostrará la lista de cómics
const comicsList = document.getElementById('comics-list');
// Obtener el campo de entrada de búsqueda por nombre de cómic
const searchInput = document.getElementById('search-input2');
// Obtener el botón de búsqueda
const searchButton = document.getElementById('search-button');

// Función para renderizar la lista de cómics según un filtro opcional
function renderComics(filter = '') {
    // Limpiar el contenido actual de la lista de cómics
    comicsList.innerHTML = '';
    // Filtrar los cómics según el nombre usando el filtro proporcionado (ignorando mayúsculas/minúsculas)
    const filteredComics = comics.filter(comic => comic.name.toLowerCase().includes(filter.toLowerCase()));
    // Iterar sobre los cómics filtrados y crear elementos HTML para cada uno
    filteredComics.forEach(comic => {
        const comicItem = document.createElement('div');
        comicItem.className = 'comic-item';
        comicItem.innerHTML = `
            <img src="${comic.src}" alt="${comic.name}">
            <p>${comic.name}</p>
        `;
        comicsList.appendChild(comicItem); // Agregar el elemento del cómic a la lista de cómics
    });
}

// Escuchar el evento click en el botón de búsqueda
searchButton.addEventListener('click', () => {
    renderComics(searchInput.value); // Llamar a renderComics con el valor actual del campo de búsqueda
});

// Escuchar el evento keyup en el campo de entrada de búsqueda
searchInput.addEventListener('keyup', () => {
    renderComics(searchInput.value); // Llamar a renderComics con el valor actual del campo de búsqueda
});

// Renderizar todos los cómics al cargar la página inicialmente
renderComics();
});
