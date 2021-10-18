import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form'
import List from './List/List'

const Main = () => {
    const style = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={style.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance $ {balance}
                </Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}> 
                    Try saying: add income for $ in Category Salary for Monday...
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={style.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
