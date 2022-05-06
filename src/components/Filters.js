import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form action="">
      <FilterMovie
        handleSearchedMovie={props.handleSearchedMovie}
        setSearchedMovie={props.setSearchedMovie}
      />
      <FilterYear
        handleSelecteddYear={props.handleSelecteddYear}
        years={props.years}
      />
    </form>
  );
};

export default Filters;
