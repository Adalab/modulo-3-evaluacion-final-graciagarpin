import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

const Filters = (props) => {
  return (
    <form action="">
      <FilterMovie
        handleFilterMovie={props.handleFilterMovie}
        filterMovie={props.filterMovie}
      />
      <FilterYear />
    </form>
  );
};

export default Filters;
