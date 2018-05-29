import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>If this is your first time you must ask another administrator to add your account...</CardContent>
    </Card>
);
