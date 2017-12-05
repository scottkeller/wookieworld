import Planets from './planets.json';


export const getPlanets = () => {
    //TODO: change to call API
    const PLANETS = Planets;
    console.log(JSON.stringify(Planets.results));
    return new Promise(resolve => resolve(
        PLANETS.results
        )
    )
};