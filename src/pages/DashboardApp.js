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

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <PageWrapper title="Dashboard">
      <Container maxWidth="xl">
        <Box component='img' src="/static/cover_photo2.jpg" sx={{width: "100%", height: "auto", minHeight: '150px', borderRadius: 2}}/>
        <Box sx={{ pb: 5, mt: 2 }}>
          <Typography variant="h4">こんにちは、Uta Base へようこそ！！！</Typography>
          <Typography color="orange" mt={5} variant="h6">
            多読とは？
          </Typography>
          <Typography color="orange" mt={2} variant="subtitle2">
            現在、多読の概念がたくさんあります。多読とは文字通り多量の文章を読むことである。Longman Dictionary of Language Teaching and Applied Linguisticsでは多読について"Develop good reading habits, to build up knowledge of vocabulary and structure, and to encourage a liking for reading"と述べます。多読を行う際は、返り読みをせず読み進めていく他、辞書を使わない方がいいです。この方法は、読書習慣を身につけ、読みスキルを改善しています。
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
