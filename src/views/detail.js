import { getDetail } from "../lib/getMovies.js";
//console.log(getDetail)

const presentDetail = (id) => {
    const div = document.createElement('div');
    div.classList.add('Detalle');


    getDetail(id.id)
        .then(detalles => {
        console.log(detalles)
            // Imagen
            const img = document.createElement('img');
            const baseUrl = 'https://image.tmdb.org/t/p/original/';
            img.src = baseUrl + detalles.poster_path; // Usar detalles en lugar de detalle
            div.appendChild(img);

            // Título original
            const orgTitle = document.createElement('h1');
            orgTitle.textContent = detalles.original_title; // Usar detalles en lugar de detalle
            div.appendChild(orgTitle);

            // Fecha de lanzamiento
            const fechLanzamiento = document.createElement('h2');
            fechLanzamiento.textContent = 'fecha de lanzamiento: ' + detalles.release_date; // Usar detalles en lugar de detalle
            div.appendChild(fechLanzamiento);

            // Género (suponiendo que hay al menos un género en el arreglo)
            if (detalles.genres && detalles.genres.length > 0) {
                const genero = document.createElement('h3');
                genero.textContent = 'Genero: ' + detalles.genres[0].name; // Usar detalles en lugar de detalle
                div.appendChild(genero);
            }

            // Votación media
            const votMedia = document.createElement('h4');
            votMedia.textContent = 'Votacion media: ' +detalles.vote_average; // Usar detalles en lugar de detalle
            div.appendChild(votMedia);

            // Votos totales
            const votTotal = document.createElement('h5');
            votTotal.textContent ='Votacion total: ' + detalles.vote_count; // Usar detalles en lugar de detalle
            div.appendChild(votTotal);

            // Agregar el div completo al documento
            document.body.appendChild(div);
        }).catch(err => {
            console.error('Error al obtener detalles de la película:', err);
        });

    return div; // Devolver el div creado
}

export default presentDetail;