import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crudGetOne, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

class ProfileMenuView extends Component {
    componentDidMount() {
        this.fetchProfile();
        console.log(this.props);
    }

    fetchProfile = () => {
        this.props.crudGetOne(
            // The resource
            'Profile',
            // The id of the resource item to fetch
            'my-profile',
            // The base path. Mainly used on failure to fetch the data
            'my-profile',
            // Wether to refresh the current view. I don't need it here
            false
        );
    };

    render() {
        const { crudGetOne, profile, ...props } = this.props;
        return (
            <UserMenu label={profile ? profile.nickname : ''} {...props}>
                <MenuItemLink
                    to="/my-profile"
                    primaryText="My profile"
                    leftIcon={<SettingsIcon />}
                />
            </UserMenu>
        );
    }
}

const mapStateToProps = state => {
    const resource = 'Profile';
    const id = 'my-profile';
    const profileState = state.admin.resources[resource];

    return {
        profile: profileState ? profileState.data[id] : null
    };
};

const ProfileMenu = connect(
    mapStateToProps,
    { crudGetOne }
)(ProfileMenuView);

export default ProfileMenu;
