import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"

const Main = () => {
    return (
        <div className="main">
            <div className="item-list">
                <div className="item-list__header">
                    <h2>Artistas Populares</h2>

                    <a href="/" className="item-list__link">
                        Mostrar Tudo
                    </a>
                </div>

                <div className="item-list__container">
                    <div className="single-item">
                        <div className="single-item__div-image-button">
                            <div className="single-item__div-image">
                                <img src="oi" alt="Artista X" className="single-item__image" />

                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />

                                <div className="single-item__texts">
                                    <div className="single-item__2lines">
                                    <p className="single-item__title">Artista</p>

                                    </div>
                                    <p className="single-item__type">artista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Main;