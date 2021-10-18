import React, {useEffect, useRef} from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

const App = () => {
    const style = useStyles();
    const { speechState } = useSpeechContext();
    const main = useRef(null);

    const executeScroll = () => main.current.scrollIntoView();

    useEffect(() => {
        if(speechState === SpeechState.Recording) {
            executeScroll();
        }
    }, [speechState])

    return (
        <div>
            <Grid className={style.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>

                <Grid item xs={12} sm={4} className={style.mobile}>
                    <Details title="Income" />
                </Grid>

                <Grid ref={main} item xs={12} sm={3} className={style.main}>
                    <Main />
                </Grid>

                <Grid item xs={12} sm={4} className={style.desktop}>
                    <Details title="Income" />
                </Grid>

                <Grid item xs={12} sm={4} className={style.last}>
                    <Details title="Expense" />
                </Grid>

                <PushToTalkButtonContainer>
                <PushToTalkButton />
                </PushToTalkButtonContainer>
            </Grid>
        </div>
    );
}

export default App
