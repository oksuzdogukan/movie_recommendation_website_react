import React from 'react'

function MovieGenreBtn({genre, genreId, isSelected, toggleGenre}) {
  return (
    
    <div className={` text-[#333] font-[600] text-sm py-2 rounded-lg cursor-pointer hover:transform-[translateY(-3px)] hover:bg-[#d6eaf8] duration-200 shadow-[0_5px_15px_rgba(52,152,219,0.3)] ${isSelected ? "bg-[#3498db] text-white" : "bg-[#ecf0f1]"}`}
    onClick={() => toggleGenre(genreId)}
    >
        {genre}
    </div>
  )
}

export default MovieGenreBtn