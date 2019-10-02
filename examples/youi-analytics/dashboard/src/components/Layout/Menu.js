import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import { translate, MenuItemLink, WithPermissions } from 'react-admin';

import home from '../../routes/Home';
import configure from '../../routes/Configure';
import analytics from '../../routes/Analytics';
import users from '../../routes/Users';
import clickstream from '../../routes/Clickstream';
import activity from '../../routes/Activity';
import dashboard from '../../routes/Dashboard';
import viewed from '../../routes/Viewed';
import location from '../../routes/Location';

import SubMenu from './SubMenu';

class Menu extends Component {
    state = {
        menuAnalytics: false,
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

    render() {
        const { onMenuClick, open } = this.props;
        return (
            <div>
                {' '}
                <MenuItemLink
                    to={`/home`}
                    primaryText={'Welcome'}
                    leftIcon={<home.icon />}
                    onClick={onMenuClick}
                />
                <WithPermissions
                    render={({ permissions }) =>
                        permissions === 'admin' ? (
                            <SubMenu
                                handleToggle={() => this.handleToggle('manage')}
                                isOpen={this.state.manage}
                                sidebarIsOpen={open}
                                name="Manage"
                                icon={<configure.icon />}
                            >
                                <MenuItemLink
                                    to={`/configure`}
                                    primaryText={'Configure'}
                                    leftIcon={<configure.icon />}
                                    onClick={onMenuClick}
                                />
                                <MenuItemLink
                                    to={`/users`}
                                    primaryText={'Users'}
                                    leftIcon={<users.icon />}
                                    onClick={onMenuClick}
                                />
                            </SubMenu>
                        ) : null
                    }
                />
                <SubMenu
                    handleToggle={() => this.handleToggle('analytics')}
                    isOpen={this.state.analytics}
                    sidebarIsOpen={open}
                    name="Analytics"
                    icon={<analytics.icon />}
                >
                    <MenuItemLink
                        to={`/dashboard`}
                        primaryText={'Dashboard'}
                        leftIcon={<dashboard.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/activity`}
                        primaryText={'Activity'}
                        leftIcon={<activity.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/analytics`}
                        primaryText={'Demographics'}
                        leftIcon={<analytics.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/clickstream`}
                        primaryText={'Click Stream'}
                        leftIcon={<clickstream.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/viewed`}
                        primaryText={'Viewed'}
                        leftIcon={<viewed.icon />}
                        onClick={onMenuClick}
                    />
                    <MenuItemLink
                        to={`/location`}
                        primaryText={'Geolocation'}
                        leftIcon={<location.icon />}
                        onClick={onMenuClick}
                    />
                </SubMenu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
    translate
);

export default enhance(Menu);
