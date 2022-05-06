const FilterYear = (props) => {
  
  const handleSelect = (ev) => {
    const valueSelected = ev.target.value;
    props.handleSelecteddYear(valueSelected);
  };

  const renderYearsInSelect = () => {
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
        <>{renderYearsInSelect()}</>
      </select>
    </>
  );
};

export default FilterYear;
