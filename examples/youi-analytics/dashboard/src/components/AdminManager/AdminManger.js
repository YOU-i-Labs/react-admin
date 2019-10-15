import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router';
import { reducer as tree } from 'ra-tree-ui-materialui';
import authProvider from '../Providers/Auth/authProvider';
import dataProvider from '../Providers/Data/dataProvider';
import i18nProvider from '../Providers/i18n/i18nProvider';
import layout from '../Layout/Layout';
import login from '../Layout/Login';
import Analytics from '../../routes/Analytics';
import Users from '../../routes/Users';
import Tags from '../../routes/Tags';
import Home from '../../routes/Home';
import Configure from '../../routes/Configure';
import Clickstream from '../../routes/Clickstream';
import Activity from '../../routes/Activity';
import Dashboard from '../../routes/Dashboard';
import Viewed from '../../routes/Viewed';
import UserSessions from '../../routes/UserSessions';
import Location from '../../routes/Location';
import Profile from '../../routes/Profile';
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: process.env.REGION,
        userPoolId: process.env.USER_POOL_ID,
        userPoolWebClientId: process.env.APP_CLIENT_ID,
    },
});

const AdminManager = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        appLayout={layout}
        loginPage={login}
        title="Administration"
        locale="en"
        customReducers={{ tree }}
        customRoutes={[
            <Route
                key="my-profile"
                path="/my-profile"
                component={Profile.edit}
            />,
        ]}
    >
        {permissions => [
            <Resource name="Home" {...Home} />,
            <Resource name="Profile" />,
            <Resource name="Analytics" {...Analytics} />,
            <Resource name="ClickStream" {...Clickstream} />,
            <Resource name="Viewed" {...Viewed} />,
            <Resource name="UserSessions" {...UserSessions} />,
            <Resource name="Location" {...Location} />,
            <Resource name="Activity" {...Activity} />,
            <Resource name="Dashboard" {...Dashboard} />,

            permissions ? <Resource name="tags" {...Tags} /> : null,

            // Only include the categories resource for admin users
            permissions === 'admin' ? (
                <Resource name="Users" {...Users} />
            ) : null,

            permissions === 'admin' ? (
                <Resource name="Configure" {...Configure} />
            ) : null,
        ]}
    </Admin>
)

export default AdminManager