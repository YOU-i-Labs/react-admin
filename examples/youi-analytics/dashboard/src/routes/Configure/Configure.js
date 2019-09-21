/* eslint react/jsx-key: off */
import React from 'react';
import Switch from '@material-ui/core/Switch';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {
    Create,
    FormTab,
    SaveButton,
    TabbedForm,
    Toolbar,
    required,
} from 'react-admin';

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    Table: {
        minWidth: '100%',
    },
    TableRow: {
        height: '25px',
    },
};

function handleChange(event) {
    //setName(event.target.value);
}

const UserEditToolbar = ({ permissions, ...props }) => (
    <Toolbar {...props}>
        <SaveButton label="SAVE" redirect="show" submitOnEnter={true} />
    </Toolbar>
);

const UserCreate = ({ permissions, ...props }) => (
    <Create {...props} title={'Configure'}>
        <TabbedForm toolbar={<UserEditToolbar permissions={permissions} />}>
            <FormTab label="user.form.config" path="">
                <Table>
                    <TableBody>
                        <TableRow height="50">
                            <TableCell>
                                <InputLabel>Application name</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Input
                                    id="application-name"
                                    onChange={handleChange}
                                    autoFocus
                                    validate={required()}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <InputLabel>Performance Insights</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Switch />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <InputLabel>Life Cycle Analytics</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Switch />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <InputLabel>User Analytics</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Switch />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </FormTab>
            <FormTab label="Dynamic Assets" path="security">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <InputLabel>Dynamic updates</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Switch />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <InputLabel>Dynamic update URL</InputLabel>
                            </TableCell>
                            <TableCell>
                                <Input
                                    id="dynamic-update-url"
                                    onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </FormTab>
        </TabbedForm>
    </Create>
);

const enhance = compose(withStyles(styles));

export default enhance(UserCreate);
