import '../styles/core/_reset.scss';
import '../styles/layout/_detail.scss';

const MovieSceneDetail = (props) => {
  console.log(props);
  return (
    <div className="page">
      <section className="detail">
        <img
          className="detail__poster"
          src={props.scene.poster}
          alt={props.scene.movie}
          title="movie poster"
        />
        <div className="detail__description">
          <h2 className="description__movie">{props.scene.movie}</h2>
          <p className="description__info">{`"${props.scene.full_line}"`}</p>
          <p className="description__info">{props.scene.director}</p>
          <a className="description__audio" href={props.scene.audio}>
            Escuchar audio
          </a>
        </div>
      </section>
    </div>
  );
};

export default MovieSceneDetail;
