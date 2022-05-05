const FilterYear = (props) => {
  const handleSelect = (ev) => {
    props.handleSelecteddYear(ev.target.value);
  };

  const renderYears = () => {
    return props.years.sort().map((year, index) => {
      return <option key={index} value={year}>{year}</option>;
    });
  };

  return (
    <>
      <label htmlFor="yearSelect">Year</label>
      <select
        type="select"
        name="yearSelect"
        id="yearSelect"
        className="yearSelect"
        value={props.selectedYear}
        onChange={handleSelect}
      >
        <option>All</option>
        <>{renderYears()}</>
      </select>
    </>
  );
};

export default FilterYear;
