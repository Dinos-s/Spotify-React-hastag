/* eslint-disable react/prop-types */
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import ItemList from "./ItemList";

const Main = ({type}) => {
    return (
        <div className="main">
            {type === "artists" || type === undefined ? (
                <ItemList 
                    title="Artistas" 
                    items={5} 
                    itemsArray={artistArray} 
                    path="/artists" 
                    idPath="/artist"
                />
            ) : (
                <></>
            )}

            {type === "songs" || type === undefined ? (
                <ItemList 
                    title="Musicas" 
                    items={10} 
                    itemsArray={songsArray} 
                    path="/songs" 
                    idPath="/song"
                />
            ) : (
                <></>
            )}
        </div>
    )
}

export default Main;