const FilterMovie = (props) => {
  const handleInput = (ev) => {
    props.handleSearchedMovie(ev.target.value);
  };

  return (
    <>
      <section className="form__input">
        <label htmlFor="movieInput" className="form__input__label">
          Movie
        </label>
        <input
          type="search"
          name="movieInput"
          id="movieInput"
          className="form__input__movieInput"
          autoComplete="off"
          placeholder="Hey, search, Little Focker!"
          value={props.searchedMovie}
          onChange={handleInput}
        />
      </section>
    </>
  );
};

export default FilterMovie;
