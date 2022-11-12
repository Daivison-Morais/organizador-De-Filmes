import connection from "../database/database.js";
import {Request, Response} from "express";
import { deletedMovie, insertedFilm } from "../repositories/repositoriesFilms.js";
import { BodyFilms } from "../protocols/protocolsListResult.js";
import { schemaPostFilm } from "../schemas/schemasPostfilms.js";

const postFilm = async (req: Request, res: Response) =>{
    const {name, genre, platform }= req.body as BodyFilms;

    const {error} = schemaPostFilm.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }

try {
    await insertedFilm(name, genre, platform)
    res.status(200).send("inserted movie!");
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
}

const deleteFilme = async (req:Request, res: Response)=>{
    const filmId = req.params.filmId;

    try {
    await deletedMovie(filmId);
    res.status(200).send("deleted movie!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    }

export {postFilm, deleteFilme}