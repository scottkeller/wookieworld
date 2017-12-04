import people from './people.json';


export const getPeople = () => {
    //TODO: change to call API
    const PEOPLE = people;
    return new Promise(resolve => resolve(
        PEOPLE.results
        )
    )
};