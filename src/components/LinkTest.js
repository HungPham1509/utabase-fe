// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Link, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../utils/formatNumber';
// component
import Iconify from './Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
  height: '100%'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

export default function LinkTest(props) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="akar-icons:link-chain" width={24} height={24} />
      </IconWrapperStyle>
      <Link target="_blank" href={props.url} sx={{ opacity: 0.72, textDecoration: 'none' }}>
        Link Test Online
      </Link>
    </RootStyle>
  );
}
