import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoList } from "react-icons/io5";

export const navigations = [
    {
      label: "Home",
      href: "",
      icon: <FaHome/>
    },
    {
      label: "Explore",
      href: "explore",
      icon: <FaSearch/>
    },
    {
      label: "Watch List",
      href: "watchlist",
      icon: <IoList/>
    }
  ]
