import { MongoClient } from "mongodb";
import "dotenv/config"

const client = new MongoClient(process.env.URI)

export const db = client.db("Clone-Spotify-hashtag")
// const songColletion = await db.collection('songs').find({}).toArray();

// console.log(songColletion);
