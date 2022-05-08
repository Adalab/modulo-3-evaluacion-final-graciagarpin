import MovieSceneCard from './MovieSceneCard';
import '../styles/core/_reset.scss';
import '../styles/layout/_cardList.scss';

const MovieSceneList = (props) => {
  if (props.filteredMovies.length === 0) {
    return (
      <h2 className="list__message"> No hay resultados para su búsqueda </h2>
    );
  }
  const movieCards = props.filteredMovies.map((card, index) => {
    return (
      <li key={index} className="list__item">
        <MovieSceneCard card={card} />
      </li>
    );
  });
  return (
    <section>
      <ul className="list">{movieCards}</ul>
    </section>
  );
};

export default MovieSceneList;
