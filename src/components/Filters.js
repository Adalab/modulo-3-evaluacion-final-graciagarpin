import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form action="">
      <FilterMovie
        handleSearchedMovie={props.handleSearchedMovie}
        SearchedMovie={props.SearchedMovie}
      />
      <FilterYear />
    </form>
  );
};

export default Filters;
