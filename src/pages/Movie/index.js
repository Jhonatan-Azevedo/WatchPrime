import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import api from "../../services/api";
import "./movie.css"
import {toast} from "react-toastify"

function Movie() {
    const urlImage = "https://image.tmdb.org/t/p/original/"
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        async function loadingMovie() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "4d6f42a5d97eedce18b8acddc536a449",
                    language: "pt-BR"
                }
            }).then((resp) => {
                console.log(resp.data.genres);
                setMovie(resp.data);
                setloading(false)
            }).catch(() => {
                console.log("Erro");
                navigate("/", { replace: true })
                return;
            })
        }

        loadingMovie();
    }, [navigate, id])


    function saveMovie() {
        const myList = JSON.parse(localStorage.getItem("@watchPrime")) || [];
        
        const hasMovie = myList.some((movieSave) => movieSave.id === movie.id)

        if (hasMovie) {
            toast.warn("Este filme já foi salvo.")
            return;
        }

        myList.push(movie);
        localStorage.setItem("@watchPrime", JSON.stringify(myList))
        toast.success("Filme salvo com sucesso!")
        return;
    }

     if (loading) {
        return (
            <section className='loading'>
                <h1>Carregando detalhes...</h1>
            </section>
        )
    }

    return (
        <section className="info-movie">
            <div className="bg-img-detail">
                <img className="img-detail" src={urlImage + movie.backdrop_path} alt={movie.title} />
                <div className="bg-fundo"></div>
            </div>
            <div className="content-movie">
                <h2>{movie.title}</h2>
                <br/>
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>
                <br/>
                <strong>Avaliação:  {movie.vote_average} / 10</strong>
                <br />
                <strong>Generos:</strong>
                {movie.genres.map(gen => {
                    return (
                        <span key={gen.id}>{gen.name}</span>
                    )
                })}

                <div className="field-btn">
                    <div>
                        <button onClick={() => saveMovie()}>Salvar <i className="bi bi-heart-fill"></i></button>
                        <button><a href={`https://youtube.com/results?search_query=${movie.title} trailer`}  target="blank" rel="external">Trailer <i className="bi bi-film"></i></a></button>
                    </div>
                    <Link to="/">Voltar <i className="bi bi-arrow-left"></i></Link>
                </div>
            </div>
        </section>
    )
}

export default Movie;