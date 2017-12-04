import categories from './categories.json';


export const getCategories = () => {
    //TODO: change to call API
    const CATEGORIES = categories;
    return new Promise(resolve => resolve(
        Object.entries(CATEGORIES).map( cat => {
            let c = {};
            c.name = cat[0];
            c.uri = cat[1];
            return c;
        } )
        )
    )
};