import React from 'react';

import useTimer from '../hooks/useTimer';
import { formatStopwatch } from '../utils/formatStopwatch';
import {Button, Card, Grid, Stack, Typography} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";
import {t} from "i18next";

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
                            <StyleButton onClick={handleStart}>{t('start')}</StyleButton>
                            : (
                                isPaused ? <StyleButton onClick={handlePause}>{t('pause')}</StyleButton> :
                                    <StyleButton onClick={handleResume}>{t('resume')}</StyleButton>
                            )
                    }
                    <StyleButton onClick={handleReset} disabled={!isActive}>{t('reset')}</StyleButton>
                </Stack>
                <Typography mt={2} variant='subtitle2'>{t('timer')}</Typography>
            </RootStyle>
        </Grid>
    );
}

export default Stopwatch;