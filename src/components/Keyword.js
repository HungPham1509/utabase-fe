// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../utils/formatNumber';
// component
import Iconify from './Iconify';
import {t} from "i18next";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3, 0, 3, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter,
  height: '100%'
}));

// ----------------------------------------------------------------------

const TOTAL = 15;

export default function Keyword(props) {
  return (
    <RootStyle>
      <Typography variant="h3">{t('keyword')}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72, mt: 5 }}>
        {props.description}
      </Typography>
    </RootStyle>
  );
}
