import species from './species.json';


export const getSpecies = () => {
    //TODO: change to call API
    const SPECIES = species;
    return new Promise(resolve => resolve(
        SPECIES.results
        )
    )
};