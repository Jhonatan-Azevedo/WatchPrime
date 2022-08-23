import { Link } from "react-router-dom"
import img404 from "./../../assets/img404.png"
import "./notFoundPage.css"

function NotFoundPage() {
    return (
        <section className="body-not-found-page">
            <img src={img404} alt="Página não encontrada" />
            <div>
                <h1 className="logo-not-found-page"><span className="color-Logo-01">Watch</span>Prime</h1>
                <br />
                <h2>Página não encontrada.</h2>
                <Link to="/"><i className="bi bi-arrow-left"></i> Voltar para o inicio</Link>
            </div>
        </section>
    )
}

export default NotFoundPage