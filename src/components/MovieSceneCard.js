import '../styles/core/_reset.scss';
import '../styles/layout/_card.scss';
import {Link} from 'react-router-dom';

const MovieSceneCard = (props) => {
  return (
    <Link to={`/scene/${props.card.uuid}`}>
      <article className="card">
        <img
          className="card__poster"
          src={props.card.poster}
          alt={props.card.movie}
          title="movie poster"
        />
        <h4 className="card__title">
          {props.card.movie} - {props.card.year}
        </h4>
        <p className="card__quote">{props.card.full_line}</p>
      </article>
    </Link>
  );
};

export default MovieSceneCard;
