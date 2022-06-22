const FilterYear = (props) => {
  const handleSelect = (ev) => {
    const valueSelected = ev.target.value;
    props.handleSelecteddYear(valueSelected);
  };

  const renderYearsInSelect = () => {
    return props.years.sort().map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <section className="form__input">
        <label htmlFor="yearSelect" className="form__input__label">
          Year
        </label>
        <select
          type="select"
          name="yearSelect"
          id="yearSelect"
          className="form__input__movieInput"
          value={props.selectedYear}
          onChange={handleSelect}
        >
          <option>All</option>
          <>{renderYearsInSelect()}</>
        </select>
      </section>
    </>
  );
};

export default FilterYear;
