import connection from "../database/database.js";

async function insertedFilm (name: string, genre: string, platform:string){

    await connection.query(`INSERT INTO films (name, genre, platform) 
    VALUES ($1, $2, $3);`, 
    [name, genre, platform]);

}

async function deletedMovie (filmId: string){
    await connection.query(`DELETE FROM films WHERE id=$1;`, [filmId]);

}

export {insertedFilm, deletedMovie}