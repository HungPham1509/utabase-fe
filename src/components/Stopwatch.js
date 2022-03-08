import React from 'react';

import useTimer from '../hooks/useTimer';
import { formatStopwatch } from '../utils/formatStopwatch';
import {Button, Card, Grid, Stack, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(3, 1, 3, 1),
    color: theme.palette.error.darker,
    backgroundColor: theme.palette.error.light
}));

const StyleButton = styled(Button)(({ theme }) => ({
    color: theme.palette.error.dark,
    border: '0.5px solid',
    margin: 2,
}));

const Stopwatch = () => {
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

    return (
        <Grid item xs={12} sm={10} md={4}>
            <RootStyle>
                <Typography variant='h3'>{formatStopwatch(timer)}</Typography>
                <Stack mt={3} direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}} justifyContent='center'>
                    {
                        !isActive && !isPaused ?
                            <StyleButton onClick={handleStart}>始める</StyleButton>
                            : (
                                isPaused ? <StyleButton onClick={handlePause}>一時停止</StyleButton> :
                                    <StyleButton onClick={handleResume}>続く</StyleButton>
                            )
                    }
                    <StyleButton onClick={handleReset} disabled={!isActive}>リセット</StyleButton>
                </Stack>
                <Typography mt={2} variant='subtitle2'>読み時間を計算するためにストップウォッチがあるので、準備ができたら「始める」ボタンをクリックしてください。</Typography>
            </RootStyle>
        </Grid>
    );
}

export default Stopwatch;