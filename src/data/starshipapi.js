import starships from './starships.json';


export const getStarships = () => {
    //TODO: change to call API
    const STARSHIPS = starships;
    return new Promise(resolve => resolve(
        STARSHIPS.results
        )
    )
};