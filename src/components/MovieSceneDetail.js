import '../styles/core/_reset.scss';
import '../styles/layout/_detail.scss';

const MovieSceneDetail = (props) => {
  console.log(props);
  return (
    <section className="detail">
      <img
        className="detail__poster"
        src={props.scene.poster}
        alt={props.scene.movie}
        title="movie poster"
      />
      <h2 className="detail__movie">{props.scene.movie}</h2>
      <p className="detail__info">{props.scene.full_line}</p>
      <p className="detail__info">{props.scene.director}</p>
      <a className="detail__audioLink" href={props.scene.audio}>
        Escuchar audio
      </a>
    </section>
  );
};

export default MovieSceneDetail;
