import { useDispatch, useSelector } from "react-redux"
import FilmCard from "../components/FilmCard";
import { removeFromWatchList } from "../redux/slices/watchListSlice";
import MovieNotFound from "../components/MovieNotFound";

function WatchlistPage() {
  const movieList = useSelector((state) => state.watchList)
  const dispatch = useDispatch();




  return (
    <main className={movieList.length > 0 ? "grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 p-10 md:px-[200px] px-[70px]" : "flex justify-center"}>
      {
        movieList.length > 0 ? 
        (movieList && movieList.map((film) => {
          return(
             <FilmCard
              key={film.id}
              id={film.id}
              title={film.title}
              poster={film.poster}
              genres={film.genres}
              released_date={film.released_date}
              vote={film.vote}
              isRemovable={true}
              onRemove={() => dispatch(removeFromWatchList(film.id))}
            />
          )
          
        })) : <MovieNotFound/>
      }
    </main>
  )
}

export default WatchlistPage