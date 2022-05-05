import '../styles/App.scss';
import '../styles/core/_reset.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [wowData, setwowData] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');
  //creo una const del estado del array de years
  const [selectedYear, setSelectedYear] = useState('Select a year');

  useEffect(() => {
    getApiData().then((wowData) => {
      console.log(wowData);
      setwowData(wowData);
    });
  }, []);

  const handleSearchedMovie = (value) => {
    setSearchedMovie(value);
  };
  const handleSelecteddYear = (value) => {
    setSelectedYear(value);
  };

  const filteredMovies = wowData.filter((card) => {
    if (searchedMovie === '') {
      return true;
    } else {
      return card.movie.toLowerCase().includes(searchedMovie.toLowerCase());
    }
  });

  const getYears = () => {
    const movieYears = wowData.map((year) => year.year);
    const unrepeatedYear = movieYears.filter((year, index) => {
      // iguala las posicines: si existe ya posición para ese año tendrá registrado que la posición de ese año es otra distinta a la actual (index) y entonces no cumple la iguadad y no retorna ese año
      return movieYears.indexOf(year) === index;
    });
    return unrepeatedYear;
  };

  return (
    <div>
      <header>
        <h1 className="title">Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <Filters
          handleSearchedMovie={handleSearchedMovie}
          searchedMovie={searchedMovie}
          handleSelecteddYear={handleSelecteddYear}
          years={getYears()}
        />
        <MovieSceneList filteredMovies={filteredMovies} />
      </main>
    </div>
  );
}

export default App;
