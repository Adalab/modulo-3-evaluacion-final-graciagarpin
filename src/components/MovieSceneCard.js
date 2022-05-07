import '../styles/core/_reset.scss';
import '../styles/layout/_card.scss';
import { Link } from 'react-router-dom';

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
        <div className="desciption">
          <h4 className="desciption__title">
            {props.card.movie} - {props.card.year}
          </h4>
          <p className="desciption__title--quote">{props.card.full_line}</p>
        </div>
      </article>
    </Link>
  );
};

export default MovieSceneCard;
