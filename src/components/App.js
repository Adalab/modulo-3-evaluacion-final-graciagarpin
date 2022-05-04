import '../styles/App.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';

function App() {

  const [dataWow, setDataWow] = useState([]);

  //  useEffect(() => {qué se va a ejecutar}, [cuándo se va a ejecutar])
  useEffect(() => {
  //getApiData me devuelve una promesa y la capturo con un .then
  // esa promesa me pasa cleanedData y tengo que volcar los datos en mi variable de estado
    getApiData().then((cleanedData) =>{
      console.log(cleanedData);
      setDataWow(cleanedData);
    });
  }, [])

  return (
    <div>
      <header>
        <h1>Owen Wilson's "WoW"</h1>
      </header>
      <main>
        <form action="">
          <label htmlFor="movieInput">Movie</label>
          <input
            type="text"
            name="movieInput"
            id="movieInput"
            className="movieInput"
            autoComplete="off"
            placeholder="Little Fockers"
          />
          <label htmlFor="yearSelect">Year</label>
          <select
            type="select"
            name="yearSelect"
            id="yearSelect"
            className="yearSelect"
          >
            <option> </option>
          </select>
        </form>
      </main>
    </div>
  );
}

export default App;
