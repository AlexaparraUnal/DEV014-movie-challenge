const conectApi = () => {
 return fetch('https://api.themoviedb.org/3/discover/movie?api_key=4951884a340b2725f4551aae1354f937') // vas a retonar el fetch 
                                                                                                     // esta funcion va a usar un fetch para conectar con la api
    .then(response => {
      if (!response.ok) {
        throw new Error('no hay peliculas')
      }
      return response.json();
    });
};

// retornas una promesa(fetch) con las peliculas
 const getMovies = () => {
  return new Promise((resolve, reject) => {
    conectApi()
      .then(response => resolve(response.results))
      .catch(error => reject(error));

  });
};

export default getMovies;
