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
  const [selectedYear, setSelectedYear] = useState('All');

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
      return card.movie.toLowerCase().includes(searchedMovie.sort().toLowerCase());
    }
  });
  // if () seletedYear === All, return true else{ props.value.year === card.year}
  const filteredYears = wowData.filter((card) => {});

  const getYears = () => {
    const movieYears = wowData.map((year) => year.year);
    const unrepeatedYear = movieYears.filter((year, index) => {
      return movieYears.indexOf(year) === index;
    });
    
    console.log(typeof unrepeatedYear);
    return unrepeatedYear
  };

  return (
    <div>
      <header>
        <h1 className="title">Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <Filters
          handleSearchedMovie={handleSearchedMovie}
          setSearchedMovie={setSearchedMovie}
          handleSelecteddYear={handleSelecteddYear}
          years={getYears()}
        />
        <MovieSceneList filteredMovies={filteredMovies} />
      </main>
    </div>
  );
}

export default App;
