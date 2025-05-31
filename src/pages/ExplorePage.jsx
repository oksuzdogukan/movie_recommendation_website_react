import { Link, useNavigate } from "react-router-dom"
import MovieGenreBtn from "../components/MovieGenreBtn"
import genresMap from "../contant/genres"
import { useState } from "react"

function ExplorePage() {

  const[selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  
  const toggleGenre = (genreId) => {
    setSelectedGenres(prev =>
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev , genreId]
    )
  }


  const handleShowRecommendations = () => {
    // Burada state'i URL'e gömüyoruz (query string gibi)
    navigate(`/films?genres=${selectedGenres.join(",")}`)
  }


  return (
    <main className='md:w-[55%] w-[95%] mx-auto mt-9 p-10 rounded-xl flex flex-col gap-6 justify-center bg-white text-center'>

      <div className='text-[#2c3e50] font-bold text-2xl'>Choose Your Favorite Movie Genres</div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5">
       {
        Object.entries(genresMap).map(([genre, genreId]) => {
          return(
            <MovieGenreBtn 
            genre={genre}
            genreId={genreId}
            key={genreId}
            isSelected={selectedGenres.includes(genreId)}
            toggleGenre={toggleGenre}/>
          )
        })
       }
      </div>

      <div className="mx-auto p-4 mt-4 bg-[#3498db] text-white rounded-xl font-semibold cursor-pointer hover:transform-[translateY(-3px)] duration-200" onClick={handleShowRecommendations}>Show Recommendations</div>

    </main>
  )
}

export default ExplorePage