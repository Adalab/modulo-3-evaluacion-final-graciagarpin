const FilterByMovieScene = (props) => {
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
      />
    </>
  );
};

export default FilterByMovieScene;
