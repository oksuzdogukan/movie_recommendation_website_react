import { useDispatch } from "react-redux";
import genresMap from "../contant/genres"
import { addToWatchList } from "../redux/slices/watchListSlice";

function FilmCard({ title , poster, genres, released_date , vote, id, isRemovable = false, onRemove}) {
  const dispatch = useDispatch();


  const getGenreName = (id) => {
    return Object.keys(genresMap).find((name) => genresMap[name] === id);
  }

  const handleAdd = () => {
    dispatch(addToWatchList({ id, title, poster, genres, released_date, vote}))
  }


  return (
    <div className="bg-white text-[#2c3e50] p-6 rounded-xl flex flex-col gap-4 justify-between" >
      
      <div className="font-bold text-xl">{title}</div>

      <div> <img src={poster} alt="#" className="rounded-xl" /> </div>

      <div className="flex flex-col gap-1 text-lg">
        <div>Genres : {genres.map(getGenreName).join(", ")}</div>
        <div>Released : {released_date}</div>
        <div>Filmvote : {vote}</div>
      </div>
      
      

      {
        isRemovable ? (
        <div
          onClick={onRemove}
          className="bg-red-200 hover:bg-red-400 text-black p-2 rounded-xl mt-3 cursor-pointer shadow-[0_5px_15px_rgba(52,152,219,0.3)] hover:-translate-y-1  duration-200">
          Remove from Watchlist
        </div>
        ) : (
          <div
          onClick={handleAdd}
          className="bg-[#f0f0f0] font-medium text-center w-[80%] mx-auto p-1 rounded-xl cursor-pointer shadow-[0_5px_15px_rgba(52,152,219,0.3)] hover:-translate-y-1 hover:bg-[#d6eaf8] duration-200">
          Add Watch Later
        </div>
        )}

    </div>
  )
}

export default FilmCard