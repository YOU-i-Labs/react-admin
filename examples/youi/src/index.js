/* eslint react/jsx-key: off */
import React from 'react';
import { Admin, Resource } from 'react-admin'; // eslint-disable-line import/no-unresolved
import { render } from 'react-dom';
import { Route } from 'react-router';
import { reducer as tree } from 'ra-tree-ui-materialui';

import authProvider from './authProvider';
import CustomRouteLayout from './customRouteLayout';
import CustomRouteNoLayout from './customRouteNoLayout';
import dataProvider from './dataProvider';
import i18nProvider from './i18nProvider';
import analytics from './analytics';
import users from './users';
import tags from './tags';
import home from './home';
import configure from './configure';
import layout from './layout/Layout';
import clickstream from './clickstream';
import activity from './activity';
import viewed from './viewed';
import location from './location';
import login from './layout/Login';

render(
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
            <Resource name="Home" {...home} />,
            <Resource name="Configure" {...configure} />,
            <Resource name="Analytics" {...analytics} />,
            <Resource name="ClickStream" {...clickstream} />,
            <Resource name="Viewed" {...viewed} />,
            <Resource name="Location" {...location} />,
            <Resource name="Activity" {...activity} />,
            <Resource name="Users" {...users} />,
            permissions ? <Resource name="tags" {...tags} /> : null,
        ]}
    </Admin>,
    document.getElementById('root')
);
