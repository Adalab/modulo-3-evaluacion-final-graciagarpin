//https://owen-wilson-wow-api.onrender.com/wows/random?results=50

import {v4 as uuidv4} from 'uuid';

const getApiData = (number) => {
  return fetch(
    `https://owen-wilson-wow-api.onrender.com/wows/random?results=${number}`
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
          uuid: uuidv4()
        };
      });
      return cleanedData;
    });
};
export default getApiData;
