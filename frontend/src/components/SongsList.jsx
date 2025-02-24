import { useState } from "react";
import SongItem from "./SongItem"

const SongList = ({songsArray}) => {
    const [items, setItems] = useState(5);

    return (
        <div className="song-list">
            {songsArray.filter((currenValue, index) => index < items).map((currentSongObj, index) => (
                <SongItem {...currentSongObj} index={index} key={index} />
            ))}
            
            <p className="song-list__see-more"
                onClick={()=>{
                    setItems(items + 5)
                }}
            >Ver Mais</p>
        </div>
    )
}

export default SongList