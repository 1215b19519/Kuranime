const fila = document.querySelector('.margen-carrusel');
const pelculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ---------------- EVENT LISTENER FLECHA DERECHA -------------
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
});

// ---------------- EVENT LISTENER FLECHA IZQUIERDA -------------
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});


// --------------------- PAGINACION ------------------------

const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');
	document.querySelector('.indicadores').appendChild(indicador);
}