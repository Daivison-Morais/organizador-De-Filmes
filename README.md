# organizador-De-Filmes

Tem como objetivo organizar filmes já assistidos com base em diversos filmes, classificados por gênero e plataformas. Esta API é uma prova de conceito no qual foi necessário aplicar type script.


## banco de dados

Para utilizar o banco de dados:

```bash
psql -U username -d database < dump.sql
```

## Rotas

### films:

-POST: '/postFilm'

para postar um filme é necessário um corpo com o seguinte formato:

```json
{
  "name": "pixel", "genre": "adventure", "platform":"netflix"
}
```

-DELETE: '/deleteFilm'

para deletar um filme é necessário mandar via params o id do filme

### users:

-POST: '/postUser'

para criar um usuário basta mandar um corpo no formato:

```json
{
  "name": "João Pereira"
}
```

-POST: '/filmWatched'

para tornar um filme assistido basta enviarum corpo no formato:

```json
{
  "filmId": "10", "userId":"10", "nota":"bom filme", "status": "true" 
}
```

-GET: '/amountByPlatform/netflix'

Esta requisição permite obter filmes por plataforma  //atualmente disponíveis: netflix e prime.

<br>

-GET: '/amountByGender/action'

Esta requisição permite obter filmes por plataforma //atualmente disponíveis: action e adventure.





