import { Link } from "react-router-dom"


function Home() {



  
  return (
    <main className="h-[70vh]  flex flex-col items-center justify-center">
      
      <div className="text-5xl font-bold mb-12 text-center">
        LET'S EXPLORE MOVIES!
      </div>

      <div className="flex gap-10">
        <Link className="px-7 py-5 font-bold text-white bg-[#3498db] rounded-3xl hover:transform-[translateY(-3px)] duration-200" to={"explore"}>Explore Movies</Link>
        <Link className="px-7 py-5 font-bold text-white border-2 rounded-3xl hover:transform-[translateY(-3px)] duration-200" to={"watchlist"}>Watch List</Link>
      </div>

      

    </main>
    
  )
}

export default Home