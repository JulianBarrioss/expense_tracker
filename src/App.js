import React from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
    const style = useStyles();

    return (
        <div>
            <Grid className={style.grid} container spacing={0} alignItems='center' justify='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={2}>
                    <Details title='Income'/>
                    <Details title='Expense'/>
                </Grid>
                
                <Grid item xs={12} sm={5}>
                    <Main/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
