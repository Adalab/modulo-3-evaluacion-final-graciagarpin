const MovieSceneCard = (props) => {
  return (
    <article> 
      <img className="posterImg" src={props.card.poster} alt={props.card.movie} title="movie poster" />
      <h4 className="card__title">{props.card.movie} - {props.card.year}</h4>
      <p className="card__quote">{props.card.full_line}</p>
    </article>
  );
};

export default MovieSceneCard;
