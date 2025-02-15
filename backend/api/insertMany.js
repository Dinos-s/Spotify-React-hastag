import {artistArray} from "../../frontend/src/assets/database/artists.js"
import {songsArray} from "../../frontend/src/assets/database/songs.js"
import { db } from "./connect.js"

const newArtistsArray = artistArray.map((currentArtistObj) => {
    const newArtistsObj = {...currentArtistObj}
    delete newArtistsObj.id

    return newArtistsObj
})

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = {...currentSongsObj}
    delete newSongsObj.id

    return newSongsObj
})

const responseArtist = await db.collection('artists').insertMany(newArtistsArray)
const responseArtists = await db.collection('songs').insertMany(newSongsArray)
