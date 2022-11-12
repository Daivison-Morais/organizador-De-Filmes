import {Request, Response} from "express";
import { listFilmsByPlatform, listFilmsBygender } from "../repositories/repositoriesSearchByParameters.js";

const searchByPlatform = async (req: Request, res: Response)=>{

    const platform: string = req.params.platform;
    
    try {

        const result = await listFilmsByPlatform(platform)
        res.send(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    }

    const searchByGenre = async (req: Request, res: Response)=>{

        const genre: string = req.params.genre;
        
        try {
            const result = await listFilmsBygender(genre)
            res.send(result.rows[0]);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
        }

    export { searchByPlatform, searchByGenre }