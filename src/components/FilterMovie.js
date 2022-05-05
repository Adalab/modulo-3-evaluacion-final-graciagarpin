const FilterMovie = (props) => {
  const handleInput = (ev) => {
    props.handleFilterMovie(ev.target.value);
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
        value={props.filterMovie}
        onChange={handleInput}
      />
    </>
  );
};

export default FilterMovie;
