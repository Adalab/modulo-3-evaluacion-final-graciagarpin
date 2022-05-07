import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
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
