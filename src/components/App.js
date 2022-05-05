import '../styles/App.scss';
import '../styles/core/_reset.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";

function App() {

  const [wowData, setwowData] = useState([]);

  //  useEffect(() => {qué se va a ejecutar}, [cuándo se va a ejecutar])
  useEffect(() => {
  //getApiData me devuelve una promesa y la capturo con un .then
  // esa promesa me pasa cleanedData y tengo que volcar los datos en mi variable de estado
    getApiData().then((wowData) =>{
      console.log(wowData);
      setwowData(wowData);
    });
  }, [])

  return (
    <div>
      <header>
        <h1 className='title'>Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <Filters />
        <MovieSceneList wowData={wowData}/>
      </main>
    </div>
  );
}

export default App;
