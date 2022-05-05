const FilterByMovieYear = () => {
  return (
    <>
      <label htmlFor="yearSelect">Year</label>
      <select
        type="select"
        name="yearSelect"
        id="yearSelect"
        className="yearSelect"
      >
        <option> </option>
      </select>
    </>
  );
};

export default FilterByMovieYear;
