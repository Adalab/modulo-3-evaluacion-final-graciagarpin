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

  const filteredMovies = wowData.filter((card) =>{
    if (searchedMovie === ''){
      return true;
    }else{
      return card.movie.toLowerCase().includes(searchedMovie.toLowerCase());
    }
  });

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
        <MovieSceneList filteredMovies={filteredMovies} />
      </main>
    </div>
  );
}

export default App;
