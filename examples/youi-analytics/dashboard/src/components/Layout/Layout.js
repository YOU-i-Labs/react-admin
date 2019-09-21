import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme } from './themes';
import Login from './Login';

const CustomLayout = props => (
    <Layout {...props} appBar={AppBar} menu={Menu} login={Login} />
);

export default connect(
    state => ({
        theme: state.theme === 'dark' ? darkTheme : lightTheme,
    }),
    {}
)(CustomLayout);
