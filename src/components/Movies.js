import {getMovies} from "../lib/getMovies.js";
import { navigateTo } from "../router.js";
console.log(getMovies)
//  Presentar las peliculas

// despues de invocar getMovies imprimirlas
// por ultimo retornas el componente
// aqui invocar la promsa

const presentMovies = () => {
    const ul = document.createElement('ul');
    ul.classList.add('peliculas')
    const baseUrl = 'https://image.tmdb.org/t/p/original/'

    getMovies().then(movies => {
        movies.forEach(movie => {                                                // aca invocas la funcion (promesa) que traera las peliculas
            const li = document.createElement('li');
            li.addEventListener("click", () => {                                 // paso 1 al li agregale un evento
            console.log(movie.id)                                                // paso 2 dentro del evento imprime un console.log(movie.id)
            navigateTo('/detail',{id:movie.id})                                  // paso 4 invocar la funcion navigateTo('/detail', {id:movie.id})
        }); 
        
            li.classList.add('pelicula')

            const img = document.createElement('img')
            img.src = baseUrl + movie.poster_path;

            const title = document.createElement('h2')
            title.textContent = movie.title;

            const estreno = document.createElement('h3')
            estreno.textContent = movie.release_date;


            li.appendChild(img);
            li.appendChild(title);
            li.appendChild(estreno);
            ul.appendChild(li);
           

        });
    });

    return ul;
}
export default presentMovies;
