//https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanedData = data.map((item) => {
        return {
          poster: item.poster,
          movie: item.movie,
          full_line: item.full_line,
          year: item.year,
          director: item.director,
          audio: item.audio,
        };
      });
      return cleanedData;
    });
};
export default getApiData;
