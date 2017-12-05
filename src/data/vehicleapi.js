import vehicles from './vehicles.json';


export const getVehicles = () => {
    //TODO: change to call API
    const VEHICLES = vehicles;
    return new Promise(resolve => resolve(
        VEHICLES.results
        )
    )
};