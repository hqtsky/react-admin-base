import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';
import { UrlField } from './MyUrlField';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
