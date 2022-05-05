import '../styles/App.scss';
import '../styles/core/_reset.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [wowData, setwowData] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');

  useEffect(() => {
    getApiData().then((wowData) => {
      console.log(wowData);
      setwowData(wowData);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  return (
    <div>
      <header>
        <h1 className="title">Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <Filters
          handleFilterMovie={handleFilterMovie}
          filterMovie={filterMovie}
        />
        <MovieSceneList wowData={wowData} />
      </main>
    </div>
  );
}

export default App;
