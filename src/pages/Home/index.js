import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
    const urlImage = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       async function loadMovies(){
           const response = await api.get("movie/now_playing", {
               params: {
                   api_key: "4d6f42a5d97eedce18b8acddc536a449",
                   language: "pt-BR",
                   page: 1
                }
           })
           
           console.log(response.data.results);
           setMovies(response.data.results.slice(0, 10));
           setLoading(false)
        }

        loadMovies();

    }, [])

    if (loading) {
        return (
            <section className='loading'>
                <h1>Carregando...</h1>
            </section>
        )
    }

    return (
        <section className='container'>
            <div className='list-movies'>
                {movies.map(movie => {
                    return (
                        <article key={movie.id}>
                            <div className='title-movie'><span>{movie.title}</span> <span>Laçamento: { movie.release_date.split("-").reverse().join("/")}</span></div>
                            <img src={urlImage + movie.poster_path} alt={movie.title} />
                            <Link to={`/filme/${movie.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Home;