import '../styles/core/_reset.scss';
import '../styles/layout/_detail.scss';
import { BiMoviePlay, BiCameraMovie } from 'react-icons/bi';
import { GiDirectorChair } from 'react-icons/gi';
import { AiOutlineAudio } from 'react-icons/ai';

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
          <h2 className="description__movie">
            {' '}
            <BiCameraMovie /> {props.scene.movie}
          </h2>
          <p className="description__info">
            {' '}
            <BiMoviePlay /> {`"${props.scene.full_line}"`}
          </p>
          <p className="description__info">
            {' '}
            <GiDirectorChair /> {props.scene.director}
          </p>
          <a className="description__audio" href={props.scene.audio}>
            <AiOutlineAudio /> Escuchar audio
          </a>
        </div>
      </section>
    </div>
  );
};

export default MovieSceneDetail;
