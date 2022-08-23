import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

// components
import Favorites from "./pages/Favorites"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import NotFoundPage from "./pages/NotFoundPage"


function RouterApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes className="routes">
                <Route path="/" element={ <Home/>} />
                <Route path="/filme/:id" element={ <Movie/>} />
                <Route path="/favoritos" element={ <Favorites/>} />
                
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouterApp