import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form action="">
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
