export type ListFilms = {
    genre: string,
    count: string | number,
}

export type BodyFilms = {
    name: string,
    genre: string,
    platform: string
}

export type BodyFilmsWatched = {
    filmId: string, userId:string, nota:( string | number), status: boolean
}