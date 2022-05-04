import MovieSceneCard from "./MovieSceneCard";

const MovieSceneList = (props) => {

 const movieCards = props.wowData.map((card) =>{
   return (<li className="list__card">
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
