const FilterMovie = (props) => {
  const handleInput = (ev) => {
    props.handleSearchedMovie(ev.target.value);
  };

  return (
    <>
      <label htmlFor="movieInput">Movie</label>
      <input
        type="text"
        name="movieInput"
        id="movieInput"
        className="movieInput"
        autoComplete="off"
        placeholder="Little Fockers"
        value={props.searchedMovie}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterMovie;
