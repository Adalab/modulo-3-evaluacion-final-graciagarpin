const FilterNumber = (props) => {
  const handleInput = (ev) => {
    props.setNumber(parseInt(ev.target.value));
  };
  parseInt();
  return (
    <>
      <section className="form__input">
        <label htmlFor="number" className="form__input__label">
          Display
        </label>
        <input
          type="number"
          name="number"
          id="number"
          className="form__input__movieInput"
          autoComplete="off"
          placeholder="Numero"
          value={props.number}
          onChange={handleInput}
        />
      </section>
    </>
  );
};

export default FilterNumber;
