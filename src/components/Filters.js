import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';
import '../styles/layout/_form.scss';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <FilterMovie
        handleSearchedMovie={props.handleSearchedMovie}
        searchedMovie={props.searchedMovie}
      />
      <FilterYear
        handleSelecteddYear={props.handleSelecteddYear}
        selectedYear={props.selectedYear}
        years={props.years}
      />
    </form>
  );
};

export default Filters;
