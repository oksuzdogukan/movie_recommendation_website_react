import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import FilmsPage from "../pages/FilmsPage";
import WatchListPage from "../pages/WatchlistPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "/explore",
                element: <ExplorePage/>
            },
            {
                path: "/films",
                element: <FilmsPage/>
            },
            {
                path: "watchlist",
                element: <WatchListPage/>
            }
        ]
    }
])

export default router