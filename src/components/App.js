import '../styles/App.scss';
import '../styles/core/_reset.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [wowData, setwowData] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState('');

  useEffect(() => {
    getApiData().then((wowData) => {
      console.log(wowData);
      setwowData(wowData);
    });
  }, []);

  const handleSearchedMovie = (value) => {
    setSearchedMovie(value);
  };

  const filteredMovies = wowData.filter((movie) =>{
    return movie.movie === searchedMovie;
  }) 

  return (
    <div>
      <header>
        <h1 className="title">Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <Filters
          handleSearchedMovie={handleSearchedMovie}
          searchedMovie={searchedMovie}
        />
        <MovieSceneList wowData={wowData} />
      </main>
    </div>
  );
}

export default App;
