import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./favorites.css"
import {toast} from "react-toastify"

function Favorites() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const myList = JSON.parse(localStorage.getItem("@watchPrime")) || [];
        setMovies(myList)
    }, []);

    function deleteMovie(id) {
        const myList = JSON.parse(localStorage.getItem("@watchPrime")) || [];
        const removeMovie = myList.filter(item => item.id !== id)
        setMovies(removeMovie)
        localStorage.setItem("@watchPrime", JSON.stringify(removeMovie))
        toast.success("Filme removido com sucesso!")
        return
    }
  
    return (
        <section className="my-movies">
            <h3>Favoritos</h3>
            <br />
            {movies.length == 0 && <span>Você não tem nenhum filme salvo :(</span>}
            <ul>
                {movies.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/filme/${movie.id}`}>Ver detalhes</Link>
                                <button onClick={ () => deleteMovie(movie.id) }>Excluir <i className="bi bi-trash"></i></button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Favorites;