import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles';

const Details = ({ title }) => {
    const style = useStyles();
    const { total, chartData } = useTransactions(title);

    return (
        <Card className={title === 'Income' ? style.income : style.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant='h5'>
                    ${total}
                </Typography>
                <Doughnut className={style.doughnut} data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
