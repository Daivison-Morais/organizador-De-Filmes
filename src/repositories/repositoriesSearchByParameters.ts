import connection from "../database/database.js";

async function listFilmsByPlatform(platform: string){
    const result = await connection.query(`SELECT films.platform, COUNT(id) FROM films WHERE platform = $1 group by platform;`, [platform])

    return result;
        
}

async function listFilmsBygender(genre: string) {
    const result = connection.query(`SELECT films.genre, COUNT(id) FROM films WHERE genre = $1 group by genre;`, [genre])
    return result;
}

export {listFilmsByPlatform, listFilmsBygender}