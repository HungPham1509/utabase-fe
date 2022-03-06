import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Stack direction={{ md: 'row', lg: 'row', xl: 'row' }}>
        <Box component="img" src="/static/logo_utabase.png" sx={{ width: 80, height: 80, ...sx }} />
        <Box
          component="img"
          src="/static/logo_utabase2.png"
          sx={{ width: 80, height: 80, ...sx }}
        />
        <Box component="img" src="/static/Logo_ulis.png" sx={{ width: 80, height: 80, ...sx }} />
      </Stack>
    </RouterLink>
  );
}
