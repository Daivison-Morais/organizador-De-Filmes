import {Request, Response} from "express";
import connection from "../database/database.js";
import { insertedUser, insertedWatchedFilm } from "../repositories/repositoriesUsers.js";
import { BodyFilmsWatched } from "../protocols/protocolsListResult.js";
import { schemaPostUser } from "../schemas/schemasPostUsers.js";

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

    const {error} = schemaPostUser.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }

    try {

        const filmExist = await connection.query(`SELECT * FROM films WHERE id = $1;`, [filmId]);
    if(filmExist.rowCount === 0){
        return res.status(409).send("Movie not found")
    }

        await insertedWatchedFilm(filmId, userId, nota, status)
        res.status(200).send("inserted movie watched");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {postUser, filmWatched}