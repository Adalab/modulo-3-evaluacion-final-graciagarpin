import '../styles/core/_reset.scss';

const MovieSceneCard = (props) => {
  return (
    <article className="card"> 
      <img className="card__poster" src={props.card.poster} alt={props.card.movie} title="card__movie poster" />
      <h4 className="card__title">{props.card.movie} - {props.card.year}</h4>
      <p className="card__quote">{props.card.full_line}</p>
    </article>
  );
};

export default MovieSceneCard;
