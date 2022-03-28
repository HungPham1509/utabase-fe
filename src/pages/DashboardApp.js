// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import PageWrapper from '../components/PageWrapper';
import {
  AppNewUsers,
  AppItemOrders,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits
} from '../sections/@dashboard/app';

import PopularCard from "../components/PopularCard";
import AppDokoemon from "../sections/@dashboard/app/AppDokoemon";
import {t} from "i18next";

// ----------------------------------------------------------------------

function DashboardApp() {
  return (
    <PageWrapper title="Dashboard">
      <Container maxWidth="xl">
        <Box component='img' src="/static/cover_photo2.jpg" sx={{width: "100%", height: "auto", minHeight: '150px', borderRadius: 2}}/>
        <Box sx={{ pb: 5, mt: 2 }}>
          <Typography variant="h4">{t('welcome')}</Typography>
          <Typography color="red" mt={5} variant="h5">
            {t('read')}
          </Typography>
          <Typography color="orange" mt={2} variant="subtitle2">
            {t('dashboard_text_1')}
          </Typography>
          <Typography color="green" mt={2} variant="h5">
            {t('dashboard_text_2')}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppDokoemon />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PopularCard />
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}

export default DashboardApp
