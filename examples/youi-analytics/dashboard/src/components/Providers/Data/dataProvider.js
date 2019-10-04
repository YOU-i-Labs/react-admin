import jsonRestProvider from 'ra-data-fakerest';
import { GET_ONE, UPDATE } from 'react-admin';
import data from './data';
//import { Auth } from 'aws-amplify';

const disableFakeFetchRequestsLogs = true;

const handleUserProfile = dataProvider => (verb, resource, params) => {
    // We know we only GET or UPDATE the profile as there is only one for the current user
    // To showcase how we can do something completely different here, we'll store it in local storage
    // You can replace this with a customized fetch call to your own API route too
    if (resource === 'Profile') {
        if (verb === GET_ONE) {
            const storedProfile = localStorage.getItem('profile');

            if (storedProfile) {
                return Promise.resolve({
                    data: JSON.parse(storedProfile)
                });
            }

            return Promise.resolve({
                data: { id: params.id, fname: 'Joe', lname: 'Dirt', email: 'jd@youi.tv' }
            });
        }
    }

    // Fallback to the dataProvider default handling
    return dataProvider(verb, resource, params);
};

export default handleUserProfile(
    jsonRestProvider(data, disableFakeFetchRequestsLogs)
);