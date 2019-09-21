import jsonRestProvider from 'ra-data-fakerest';
import data from './data';
import addUploadFeature from './addUploadFeature';

const dataProvider = jsonRestProvider(data, true);
const uploadCapableDataProvider = addUploadFeature(dataProvider);

// Calls this after delayedDataProvider below.
const sometimesFailsDataProvider = (type, resource, params) =>
    new Promise((resolve, reject) => {
        console.log('dataProvider: sometimesFailsDataProvider');
        // add rejection by type or resource here for tests, e.g.
        // if (type === 'DELETE' && resource === 'posts') {
        //     return reject('deletion error');
        // }
        return resolve(uploadCapableDataProvider(type, resource, params));
    });

// hits this first, then sometimesFailsDataProvider above
const delayedDataProvider = (type, resource, params) =>
    new Promise(resolve => {
        setTimeout(
            // type: GET_LIST
            // params: filter: users
            // params: pagination (page: 1 to perpage: 10)
            // parms: sort: name ASC
            // resource: "Users"
            () => resolve(sometimesFailsDataProvider(type, resource, params)),
            1000
        );
        console.log('dataProvider: delayedDataProvider');
    });

export default delayedDataProvider;
