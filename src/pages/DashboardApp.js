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

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <PageWrapper title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">こんにちは、Utabaseへようこそ</Typography>
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

          <Grid item xs={12} md={6} lg={4}>
            <Box component="img" src="/static/book_store2.jpg" sx={{ borderRadius: 3 }} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
}
