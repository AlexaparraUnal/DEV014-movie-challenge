import Movies from "../components/Movies.js";
import filterYear from "../components/filterYear.js";
import { getFilterYear } from "../lib/getMovies.js";
import { navigateTo } from "../router.js";

const home = () => {
    const filter = filterYear();
    const main = document.createElement('main');
    const sectionselect = document.createElement('section');
    const sectionfilms = document.createElement('section');
    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    sectionselect.appendChild(filter);
    sectionfilms.appendChild(Movies()); // Muestra la lista inicial de películas
    main.appendChild(sectionselect);
    main.appendChild(sectionfilms);

    const clearMovies = () => {
        sectionfilms.innerHTML = '';
    };

    filter.addEventListener('change', (e) => {
        clearMovies();
        const selectedYear = e.target.value;
        getFilterYear(selectedYear).then((movies) => {     //obtiene el año seleccionado del filtro y lo almacena en selectedYear
            if (!movies || movies.length === 0) {
                return;
            }

            const ul = document.createElement('ul');
            ul.classList.add('peliculas');

            movies.forEach(movie => {
                const li = document.createElement('li');
                li.classList.add('pelicula');

                li.addEventListener("click", () => {
                    console.log(movie.id);
                    navigateTo('/detail', { id: movie.id });
                });

                const img = document.createElement('img');
                img.src = baseUrl + movie.poster_path;
                img.alt = `${movie.title} poster`;

                const title = document.createElement('h2');
                title.textContent = movie.title;

                const estreno = document.createElement('h3');
                estreno.textContent = movie.release_date;

                li.appendChild(img);
                li.appendChild(title);
                li.appendChild(estreno);
                ul.appendChild(li);
            });

            sectionfilms.appendChild(ul);
            }).catch(error => {
        });
    });

    return main;
};

export default home;





