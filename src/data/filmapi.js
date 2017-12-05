import films from './films.json';


export const getFilms = () => {
    //TODO: change to call API
    const FILMS = films;
    return new Promise(resolve => resolve(
        FILMS.results
        )
    )
};