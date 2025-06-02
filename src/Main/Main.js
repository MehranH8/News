import Fashion from "../components/Fashion/Fashion"
import Fashiondetail from "../components/Fashion/Fashiondetail/Fashiondetail"
import Home from "../components/Home/Home"
import Lifestyle from "../components/Lifestyle/Lifestyle"
import Lifestyledetail from "../components/Lifestyle/Lifestyledetail/Lifestyledetail"
import Movie from "../components/Movie/Movie"
import Moviedetail from "../components/Movie/Moviedetail/Moviedetail"
import { NavbarSimple } from "../components/Navbar/Navbarsimple"
import { Smallnavbar } from "../components/Smallnavbar/Smallnavbar"
import Technology from "../components/Technology/Technology"
import Technologydetail from "../components/Technology/Technologydetail/Technologydetail"
import Topnavbar from "../components/Topnavbar/Topnavbar"
import Sidedetail from "../Ui/Sidedetail/Sidedetail"
import { Route, Routes } from "react-router-dom";
import Page404 from "../Ui/Page404/Page404"




const Main = () => {
    return (
        <div className="">
            <Topnavbar />
            <NavbarSimple />
            <Smallnavbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/fashion/detail/:id" element={<Fashiondetail />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/lifestyle/detail/:id" element={<Lifestyledetail />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/detail/:id" element={<Moviedetail />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/technology/detail/:id" element={<Technologydetail />} />
            <Route path="/topnews" element={<Sidedetail />} />
            <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    )
}

export default Main