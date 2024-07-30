const conectApi = () => {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=4951884a340b2725f4551aae1354f937')
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de películas');
      }
      return response.json();
    });
};

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    conectApi()
      .then(response => resolve(response.results))
      .catch(error => reject(error));
  });
};

export const movieDetail = (id) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTUxODg0YTM0MGIyNzI1ZjQ1NTFhYWUxMzU0ZjkzNyIsIm5iZiI6MTcyMTE4NDk3MC41ODIzNTcsInN1YiI6IjY2NTY4YWVkOTVhYjA3ZDliNzIxNDM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bGCp8PR_moCe2H40tu2VezTDjJGTtj4FXhKa_H8oq1A'
    }
  };
  console.log(id)
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo obtener el detalle de la película');
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => console.error(err));
};

export const getDetail = (id) => {
  return new Promise((resolve, reject) => {
    movieDetail(id)
      .then(detail => resolve(detail))
      .catch(error => reject(error));
  });
};

export const getFilterYear = (year) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTUxODg0YTM0MGIyNzI1ZjQ1NTFhYWUxMzU0ZjkzNyIsIm5iZiI6MTcyMTcwMzUyNi44NTA0OTUsInN1YiI6IjY2NTY4YWVkOTVhYjA3ZDliNzIxNDM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OGeIi2CJtfEAIhxMd2wUpb27qcZxDf0JWCDvplalsPk'
    }
  };

  return fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Verifica la estructura de los datos aquí
    return data.results;
  })
  .catch(err => {
    console.error(err);
    return [];
  });
};
