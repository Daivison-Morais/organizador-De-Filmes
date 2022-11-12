import connection from "../database/database.js";

async function insertedUser(name: string){
    await connection.query(`INSERT INTO users (name) VALUES ($1) ;`, [name]);
}

async function insertedWatchedFilm(filmId: string, userId: string, nota: string | number, status: boolean){

    await connection.query(`INSERT INTO "filmUser" ("filmId", "userId", nota, status) VALUES ($1, $2, $3, $4);`, [filmId, userId, nota, status]);
}

export {insertedUser, insertedWatchedFilm}