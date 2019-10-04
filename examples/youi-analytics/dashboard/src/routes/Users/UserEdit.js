/* eslint react/jsx-key: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    DeleteWithConfirmButton,
    DisabledInput,
    Edit,
    SaveButton,
    TextInput,
    Toolbar,
    required,
    SimpleForm,
    DateInput,
    minLength,
    maxLength,
    RadioButtonGroupInput,
    BooleanInput,
    crudCreate,
} from 'react-admin';
import { Auth } from 'aws-amplify';
import { withStyles } from '@material-ui/core/styles';

import UserTitle from './UserTitle';

// Create custom styles for the page.
const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    inlineBlock: {
        display: 'inline-flex',
        marginRight: '1rem',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

class SaveUserButtonComponent extends Component {
    handleClick = () => {
        const { basePath, handleSubmit, redirect, saveUser } = this.props;
        console.log('Hello World');

        //TODO: make sure passwd and confirm are the same.

        return handleSubmit(values => {
            console.log(values);
            let username = values.email;
            let password = values.passwd;
            let fname = values.fname;
            let lname = values.lname;
            let activation = values.activated_at;
            let role = values.role;
            let active = values.active.toString();

            try {
                const signUpResponse = Auth.signUp({
                    username,
                    password,
                    lname,
                    fname,
                    activation,
                    role,
                    active,
                    attributes: {},
                });
                console.log('Register user response: ' + signUpResponse);
                saveUser(values, basePath, redirect);
            } catch (error) {
                let err = null;
                !error.message ? (err = { message: error }) : (err = error);
                console.log('Error: ' + err.message);
            }
        });
    };

    render() {
        const { handleSubmitWithRedirect, saveUser, ...props } = this.props;

        return (
            <SaveButton
                handleSubmitWithRedirect={this.handleClick}
                {...props}
            />
        );
    }
}

// Update the user through the react-admin crudCreate component.
const saveUser = (values, basePath, redirectTo) =>
    crudCreate('posts', { ...values }, basePath, redirectTo);

const SaveUserButton = connect(
    undefined,
    { saveUser }
)(SaveUserButtonComponent);

const CustomToolbar = withStyles(styles)(props => (
    <Toolbar {...props}>
        <SaveUserButton
            label="user.action.save"
            redirect="list"
            submitOnEnter={false}
        />
        <DeleteWithConfirmButton
            label="post.action.save_and_add"
            redirect={false}
            submitOnEnter={false}
            variant="flat"
        />
    </Toolbar>
));

const validateName = [required(), minLength(2), maxLength(15)];
const validateEmail = [required()];

const UserEdit = withStyles(styles)(({ classes, ...props }) => (
    <Edit 
        title={<UserTitle />} 
        align="left"
        {...props}>
            
        <SimpleForm toolbar={<CustomToolbar />}>
            <BooleanInput
                label="Active Account"
                source="active"
                defaultValue={true}
            />
            <DisabledInput label="Id" source="id" />
            <TextInput
                label="First Name"
                source="fname"
                validate={validateName}
                formClassName={classes.inlineBlock}
            />
            <TextInput
                label="Last Name"
                source="lname"
                validate={validateName}
                formClassName={classes.inlineBlock}
            />
            <TextInput
                label="Email"
                source="email"
                type="email"
                validate={validateEmail}
            />
            <TextInput
                label="Password"
                source="passwd"
                type="password"
                formClassName={classes.inlineBlock}
            />
            <TextInput
                label="Password Confirm"
                source="confirm"
                type="password"
                formClassName={classes.inlineBlock}
            />
            <DateInput
                label="Activation Date"
                source="activated_at"
                disabled="true"
                defaultValue={new Date()}
            />
            <RadioButtonGroupInput
                label="Role"
                source="role"
                choices={[
                    { id: 'user', name: 'User' },
                    { id: 'administrator', name: 'Administrator' },
                ]}
            />
        </SimpleForm>
    </Edit>
));

UserEdit.propTypes = {
    id: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    permissions: PropTypes.string,
};

export default UserEdit;
