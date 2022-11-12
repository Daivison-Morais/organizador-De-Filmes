import express from "express";
import { postFilm, deleteFilme } from "./controllers/controllersFilms.js";
import { filmWatched, postUser } from "./controllers/controllersUsers.js";
import { searchByGenre, searchByPlatform } from "./controllers/contrllersSearchByParameters.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.post("/postFilm", postFilm);
server.delete("/deleteFilm/:filmId", deleteFilme);

server.post("/PostUser", postUser);
server.post("/watchedFilmUser", filmWatched);

server.get("/amountByPlatform/:platform", searchByPlatform); //netflix e prime
server.get("/amountByGender/:genre", searchByGenre); //action, adventure

server.listen(4000, ()=>{
    console.log("linsten on 4000")
})