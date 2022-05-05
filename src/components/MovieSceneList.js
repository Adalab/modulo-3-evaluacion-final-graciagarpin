import MovieSceneCard from "./MovieSceneCard";
import '../styles/core/_reset.scss';

const MovieSceneList = (props) => {

 const movieCards = props.filteredMovies.map((card, index) =>{
   return (<li key={index} className="list__item">
     <MovieSceneCard card={card}/>
   </li>
   )
 });
  return (
    <section> 
      <ul className="list">
        {movieCards}
      </ul>
    </section>
  );
};

export default MovieSceneList;
