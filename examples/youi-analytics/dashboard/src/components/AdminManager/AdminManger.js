import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router';
import { reducer as tree } from 'ra-tree-ui-materialui';
import authProvider from '../Providers/Auth/authProvider';
import dataProvider from '../Providers/Data/dataProvider';
import i18nProvider from '../Providers/i18n/i18nProvider';
import layout from '../Layout/Layout';
import login from '../Layout/Login';
import CustomRouteLayout from '../CustomLayout/customRouteLayout';
import CustomRouteNoLayout from '../CustomLayout/customRouteNoLayout';
import Analytics from '../../routes/Analytics';
import Users from '../../routes/Users';
import Tags from '../../routes/Tags';
import Home from '../../routes/Home';
import Configure from '../../routes/Configure';
import Clickstream from '../../routes/Clickstream';
import Activity from '../../routes/Activity';
import Viewed from '../../routes/Viewed';
import Location from '../../routes/Location';

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
                exact
                path="/custom"
                component={CustomRouteNoLayout}
                noLayout
            />,
            <Route exact path="/custom2" component={CustomRouteLayout} />,
        ]}
    >
        {permissions => [
            <Resource name="Home" {...Home} />,
            <Resource name="Analytics" {...Analytics} />,
            <Resource name="ClickStream" {...Clickstream} />,
            <Resource name="Viewed" {...Viewed} />,
            <Resource name="Location" {...Location} />,
            <Resource name="Activity" {...Activity} />,

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