import '../styles/App.scss';

function App() {
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
