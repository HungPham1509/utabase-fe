import React from 'react';

import useTimer from '../hooks/useTimer';
import { formatStopwatch } from '../utils/formatStopwatch';
import {Button, Card, Grid, Stack, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0, 5, 0),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.light,
    height: '100%'
}));

const StyleButton = styled(Button)(({ theme }) => ({
    color: theme.palette.error.dark,
    border: '0.5px solid',
    margin: 2,
}));

const Stopwatch = () => {
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

    return (
        <Grid item xs={12} sm={10} md={3}>
            <RootStyle>
                <Typography variant='h3'>{formatStopwatch(timer)}</Typography>
                <Stack mt={3} direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}} justifyContent='center'>
                    {
                        !isActive && !isPaused ?
                            <StyleButton onClick={handleStart}>始める</StyleButton>
                            : (
                                isPaused ? <StyleButton onClick={handlePause}>一時停止</StyleButton> :
                                    <StyleButton onClick={handleResume}>履歴書</StyleButton>
                            )
                    }
                    <StyleButton onClick={handleReset} disabled={!isActive}>リセット</StyleButton>
                </Stack>
            </RootStyle>
        </Grid>
    );
}

export default Stopwatch;