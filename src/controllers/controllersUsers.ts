import {Request, Response} from "express";
import { insertedUser, insertedWatchedFilm } from "../repositories/repositoriesUsers.js";
import { BodyFilmsWatched } from "../protocols/protocolsListResult.js";


const postUser = async (req: Request, res: Response)=>{
    
    const name: string = req.body.name;
    try {

       await insertedUser(name)

        res.status(200).send("inserted user");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const filmWatched = async (req: Request, res: Response)=>{
    
    const { filmId, userId, nota, status } = req.body as BodyFilmsWatched;
    try {
        await insertedWatchedFilm(filmId, userId, nota, status)
        res.status(200).send("inserted movie watched");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {postUser, filmWatched}